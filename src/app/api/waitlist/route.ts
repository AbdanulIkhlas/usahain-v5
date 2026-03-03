import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic Validation
    const { fullName, phoneNumber, city, joinAs, mainGoal, agreed } = body;

    if (!fullName || !phoneNumber || !city || !joinAs || !mainGoal || !agreed) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Temporary logging for MVP
    console.log("New Waitlist Submission:", body);

    /*
     * ==========================================
     * INTEGRATION READY ARCHITECTURE
     * ==========================================
     *
     * Option 1: Send to Google Sheets via Webhook (Google Apps Script)
     *
     * const sheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
     * if (sheetWebhookUrl) {
     *   await fetch(sheetWebhookUrl, {
     *     method: 'POST',
     *     headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify(body)
     *   });
     * }
     *
     * Option 2: Database Integration (e.g. Prisma + PostgreSQL)
     *
     * await prisma.waitlist.create({
     *   data: {
     *     fullName,
     *     phoneNumber,
     *     email: body.email,
     *     city,
     *     joinAs,
     *     mainGoal,
     *     estimatedBudget: body.estimatedBudget,
     *   }
     * });
     *
     * Option 3: External CRM / Email Marketing (e.g. Mailchimp, SendGrid)
     *
     * await crmClient.addContact({
     *   email: body.email,
     *   firstName: fullName,
     *   tags: ['waitlist', joinAs]
     * });
     */

    return NextResponse.json(
      { success: true, message: "Successfully added to waitlist" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Waitlist API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
