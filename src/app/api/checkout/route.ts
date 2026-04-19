import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2026-03-25.dahlia",
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const priceId = formData.get("priceId") as string;
    const packageName = formData.get("packageName") as string;

    if (!priceId || priceId.includes("placeholder")) {
      // Stripe not configured yet — redirect to contact
      return NextResponse.redirect(
        new URL("/contact?ref=stripe-pending", request.url)
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/packages/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/packages`,
      metadata: { packageName },
      allow_promotion_codes: true,
    });

    return NextResponse.redirect(session.url!, 303);
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.redirect(new URL("/contact", request.url));
  }
}
