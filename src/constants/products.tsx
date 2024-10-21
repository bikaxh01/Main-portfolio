import PDF_CHAT_1 from "public/images/PDF_CHAT_1.png";
import PDF_CHAT_2 from "public/images/PDF_CHAT_2.png";
import BLOG_1 from "public/images/BLOG_APP_1.png";

export const products = [
  {
    href: "https://chat-pdf-mu-ten.vercel.app/",
    title: "Chat-PDF",
    description: "A AI powered chat application with you PDF document.",
    thumbnail: PDF_CHAT_1,
    images: [PDF_CHAT_1, PDF_CHAT_2],
    stack: ["Nextjs", "Pinecone", "Clerk", "Open AI"],
    slug: "Chat-PDF",
    content: (
      <div>
        <p>
          Ever wished you could just talk to those long, never-ending PDFs
          instead of scrolling through endless pages like a lost soul in the
          digital wilderness? Well, wish no more! I’ve built PDF-Chat, an app
          that lets you chat with your beloved PDFs like they’re your new best
          friend.{" "}
        </p>
        <p>
          Forget about endless skimming and getting lost halfway through page
          134! Just ask your PDF the important stuff—&apos;Hey, where&apos;s
          that contract clause again?&apos; or &apos;Can you summarize this
          50-page report in one sentence?&apos; (Spoiler alert: It can, and it
          will save your sanity). So, go ahead, strike up a conversation with
          your PDF. Who knows? You might even find that 300-page eBook
          wasn&apos;t such a daunting read after all. 😂📚
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://blog-app-teal-three.vercel.app/",
    title: "Blog-App",
    description: "A Blog Application.",
    thumbnail: BLOG_1,
    images: [BLOG_1, BLOG_1],
    stack: [
      "Nextjs",
      "Tailwindcss",
      "Clerk",
      "Tenstack Query",
      "Novel Text Editor",
    ],
    slug: "Blog-app",
    content: (
      <div>
        <p>
          Have you ever had a brilliant idea strike you at 3 a.m., only to find
          that your outdated blog platform is more of a digital maze than a
          publishing tool? Well, worry no more! I’ve created a Blog Application
          that lets you publish your thoughts faster than you can hit the snooze
          button on your alarm!.{" "}
        </p>
        <p>
          With our sleek, Notion-like text editor, crafting your next
          masterpiece is as easy as dragging and dropping. No more wrestling
          with clunky interfaces or wondering why your formatting looks like it
          was designed by a caffeinated squirrel. Whether you’re a seasoned
          blogger or just starting your journey, our application is here to turn
          your words into works of art with minimal fuss and maximum flair.{" "}
        </p>
        <p>
          Imagine this: you have a great story, an interesting tutorial, or an
          opinion piece just begging to be shared with the world. With my blog
          application, you can type it up and hit publish in seconds—just enough
          time to grab your coffee (or tea, we don’t judge!). ☕️✨{" "}
        </p>
        <p>
          So, say goodbye to the old, tedious blogging days and hello to a
          seamless, intuitive experience. It’s time to unleash your inner writer
          and share your thoughts without the hassle—because your words deserve
          to be read!.
        </p>{" "}
      </div>
    ),
  },
];
