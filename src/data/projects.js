const myProjects = [
    {
        id: "001",
        name: "Homelab",
        desc: "My first attempt at setting up a homelab.  I undertook this at the same time " +
              "I upgraded the home network, with a TP-Link Omada setup.  " +
              "Homepage (https://gethomepage.dev) is an amazing resource, providing a static landing page or pages, " +
              "with a straightforward YAML configuration.  A low power mini-PC runs the system, which includes DNS-level " +
              "content filtering, media serving (via Plex), and a number of other useful services. " +
              " It's my homepage, which I can access via Tailscale.",
        stack: ["CSS", "Docker", "HTML", "YAML"],
        image: "/screenshots/homelab.png",

    },
    {
        id: "002",
        name: "Yes We Can",
        desc: "This was one of the first apps I created, as a university assignment.  " +
              "Its a simple concept - keep track of how much money you save or throw away by recycling or dumping drink containers.  " +
              "The app includes a barcode scanner for product information, and utilises a firestore database for recording totals.  " +
              "Visit www.yeswecan.cloud for a closer look.",
        stack: ["JavaScript", "React", "CSS", "HTML", "Vercel"],
        image: "/screenshots/ywc.png",


    },
    {
        id: "003",
        name: "Calculator-Neu",
        desc: "A fun project to build a functioning calculator.  " +
              "This started as a simple web-app, then I decided to style the buttons using neumorphic design principles.  " +
              "This is surprisingly easy to achieve with CSS, using a combination of inner and outer box-shadows.  " +
              "Having completed the logic and design, I built the app using Tauri to produce a small package than an Electron app.  The result looks great, very minimal.",
        stack: ["CSS", "JavaScript", "HTML", "Rust"],

        image: "/screenshots/calc.png",


    },
    {
        id: "004",
        name: "Hangman",
        desc: "Another classic React update - this time for the word game Hangman.  " +
              "This started as a Java based university assignment, played out completely on the command line.  " +
              "I decided to take the basics from there and reproduce the logic, with some better imagery and sound, using React.  " +
              "A month or so later, some much better sound and graphics, as well as a persistent score system and much improved game logic from that initial assignment.",
        stack: ["JavaScript", "React", "CSS", "HTML"],
        image: "/screenshots/hang.png",

    },
    {
        id: "005",
        name: "Trade Connect",
        desc: "Trade Connect was a University team assignment, designed to test our ability to work together as a group, " +
              "utilising SCRUM methodology, as well as deliver a working application.  " +
              "The idea came from helping people without transport visit recycling depots " +
              "- the friend with a car or van who would provide a lift.  " +
              "From there is went on to include various local tradespeople, including the original 'man-with-a-van'.",
        stack: ["JavaScript", "CSS", "HTML"],
        image: "/screenshots/tc.png",


    }
]

export default myProjects;