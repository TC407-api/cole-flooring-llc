const { AgentMailClient } = require('agentmail');

const client = new AgentMailClient({
  apiKey: process.env.AGENT_MAIL_API_KEY
});

async function main() {
  try {
    const inboxesRes = await client.inboxes.list();
    const inboxList = inboxesRes.inboxes || inboxesRes.items || inboxesRes || [];
    
    let found = false;
    for (const inbox of inboxList) {
      const inbox_id = inbox.inbox_id || inbox.inboxId || inbox.id;
      const messagesRes = await client.inboxes.messages.list(inbox_id, { limit: 10 });
      const items = messagesRes.messages || messagesRes.items || messagesRes || [];

      for (const m of items) {
        if (m.subject && m.subject.toLowerCase().includes('invite') || 
            (m.from && m.from.toLowerCase().includes('vercel'))) {
          console.log("FOUND INVITE:");
          console.log("From:", m.from);
          console.log("Subject:", m.subject);
          console.log("ID:", m.message_id || m.messageId || m.id);
          found = true;
          
          const fullMessage = await client.inboxes.messages.get(inbox_id, m.message_id || m.messageId || m.id);
          console.log("\nBODY PREVIEW:");
          console.log(fullMessage.text?.substring(0, 500) || "No text body");
        }
      }
    }
    if (!found) console.log("No Vercel/GitHub invites found in AgentMail inboxes.");
  } catch (error) {
    console.error("ERROR:", error.message || error);
  }
}
main();
