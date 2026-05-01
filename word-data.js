// word-data.js
// This array holds all the course modules batch by batch.

const wordNotesData = [
    {
        id: "batch1",
        title: "1. Beginner: Introduction & Basics",
        level: "Beginner",
        sections: [
            {
                heading: "Getting Started with MS Word",
                text: "Microsoft Word is a word processing program used to create professional-looking documents. When you open Word, you are greeted by the Start Screen where you can choose a Blank Document or a pre-designed template.",
                imgSrc: "images/word-start-screen.jpg" // Replace with your actual image path
            },
            {
                heading: "Understanding the Ribbon",
                text: "The Ribbon is the panel at the top portion of the document. It has several tabs (Home, Insert, Design, Layout, etc.). The 'Home' tab contains the most frequently used text formatting tools like Font size, Bold, Italic, and Underline.",
                imgSrc: "images/word-ribbon.jpg"
            },
            {
                heading: "Saving Your Document",
                text: "To avoid losing your work, press Ctrl + S or go to File > Save As. Choose a location on your computer and give your document a clear name. It is a good habit to save every 10 minutes.",
                imgSrc: "images/word-save-as.jpg"
            }
        ]
    },
    {
        id: "batch2",
        title: "2. Intermediate: Formatting & Layout",
        level: "Intermediate",
        sections: [
            {
                heading: "Paragraph Formatting & Alignment",
                text: "You can align your text to the Left, Center, Right, or Justify it (making both left and right edges even). This is crucial for creating neat assignments and official letters. Use the Paragraph group under the Home tab.",
                imgSrc: "images/paragraph-alignment.jpg"
            },
            {
                heading: "Inserting Tables",
                text: "Tables organize data into rows and columns. Go to Insert > Table and drag your mouse over the grid to select the number of rows and columns you need. You can then type directly into the cells.",
                imgSrc: "images/insert-table.jpg"
            },
            {
                heading: "Page Setup and Margins",
                text: "Before printing, you must ensure your page layout is correct. Go to the Layout tab to adjust Margins (Normal, Narrow, Custom), Orientation (Portrait or Landscape), and Paper Size (e.g., A4).",
                imgSrc: "images/page-layout.jpg"
            }
        ]
    },
    {
        id: "batch3",
        title: "3. Advanced: Automation & Review",
        level: "Advanced",
        sections: [
            {
                heading: "Using Mail Merge",
                text: "Mail Merge is a powerful tool used to send a similar letter to many different people. You create one main document (like an admission letter) and link it to a data source (like an Excel sheet of student names). Go to Mailings > Start Mail Merge.",
                imgSrc: "images/mail-merge-wizard.jpg"
            },
            {
                heading: "Creating a Table of Contents (TOC)",
                text: "If you are writing a long syllabus or book, Word can generate a TOC automatically. First, you must apply 'Heading Styles' (Heading 1, Heading 2) to your chapter titles. Then, go to References > Table of Contents.",
                imgSrc: "images/table-of-contents.jpg"
            },
            {
                heading: "Track Changes & Comments",
                text: "When working with others, you can track every edit made to a document. Go to Review > Track Changes. Any deleted text will be crossed out in red, and new text will be underlined. You can also add comments to margins.",
                imgSrc: "images/track-changes.jpg"
            }
        ]
    }
];
