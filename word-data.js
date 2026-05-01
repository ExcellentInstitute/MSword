// word-data.js
// Complete MS Word Masterclass Syllabus

const wordNotesData = [
    {
        id: "batch1",
        title: "Module 1: Introduction & The Basics",
        level: "Beginner",
        sections: [
            {
                heading: "What is MS Word?",
                text: "Microsoft Word is a word processing software. Think of it as a digital notebook where you can type, edit, and format text to create professional documents like letters, essays, resumes, and project reports. When you open Word, you will see a 'Start Screen' where you can choose a 'Blank Document' to start fresh.",
                imgSrc: "images/1-start-screen.jpg"
            },
            {
                heading: "Understanding the Ribbon",
                text: "The 'Ribbon' is the thick band of tools at the very top of your screen. It is organized into different 'Tabs' (like Home, Insert, Design, Layout). Clicking on a tab opens a new set of tools. The 'Home' tab is the most important one—it holds your basic text tools like font size, color, and bold/italic options.",
                imgSrc: "images/2-the-ribbon.jpg"
            },
            {
                heading: "Saving Your Hard Work",
                text: "Computers can lose power, or programs can crash. To keep your work safe, you must 'Save' it. Go to 'File' > 'Save As', choose a folder on your computer, and give your file a clear name (like 'My First Essay'). Shortcut: Press Ctrl + S to save quickly while you work!",
                imgSrc: "images/3-save-as.jpg"
            },
            {
                heading: "Font Formatting (Making Text Look Good)",
                text: "Under the Home tab, you can change how your text looks. You can change the 'Font Style' (the handwriting style), make it bigger or smaller, and apply Bold (B), Italic (I), or Underline (U) to make important words stand out. You can also change the text color to make headings pop.",
                imgSrc: "images/4-font-formatting.jpg"
            }
        ]
    },
    {
        id: "batch2",
        title: "Module 2: Paragraphs, Pages & Printing",
        level: "Beginner to Intermediate",
        sections: [
            {
                heading: "Paragraph Alignment",
                text: "Alignment is how your text lines up on the page. You have four choices in the Home tab: Left (standard for typing), Center (great for titles and headings), Right (often used for dates on letters), and Justify (stretches text so both the left and right edges are perfectly straight, like in a newspaper).",
                imgSrc: "images/5-alignment.jpg"
            },
            {
                heading: "Lists: Bullets and Numbers",
                text: "If you need to write a list of items (like parts of a computer), use Bullets or Numbering. You can find these tools in the Home tab. Clicking the bullet icon creates a neat dot for each new line. Pressing 'Enter' automatically creates the next bullet!",
                imgSrc: "images/6-bullet-lists.jpg"
            },
            {
                heading: "Page Layout & Margins",
                text: "Before you print, you need to set up your page. Go to the 'Layout' tab. 'Margins' are the blank white spaces around the edges of your paper. You can make them 'Narrow' to fit more text or 'Normal' for standard printing. You can also change 'Orientation' to Portrait (tall) or Landscape (wide).",
                imgSrc: "images/7-page-layout.jpg"
            },
            {
                heading: "How to Print Correctly",
                text: "Go to 'File' > 'Print' (or press Ctrl + P). You will see a preview of how your document will look on paper. Here, you can select which printer to use, how many copies you want, and whether you want to print all pages or just the current page.",
                imgSrc: "images/8-print-preview.jpg"
            }
        ]
    },
    {
        id: "batch3",
        title: "Module 3: Inserting Visuals & Objects",
        level: "Intermediate",
        sections: [
            {
                heading: "Inserting Pictures and Shapes",
                text: "A document with only text can be boring. Go to the 'Insert' tab to add visuals. Click 'Pictures' to add an image from your computer. Click 'Shapes' to draw arrows, stars, or boxes. Once you insert an image, a new 'Picture Format' tab appears to let you add borders and effects.",
                imgSrc: "images/9-insert-pictures.jpg"
            },
            {
                heading: "Creating Tables",
                text: "Tables are perfect for organizing data, like a class timetable or a list of student marks. Go to Insert > Table. Move your mouse over the grid squares to choose how many columns (vertical) and rows (horizontal) you need, then click to drop the table onto your page.",
                imgSrc: "images/10-insert-tables.jpg"
            },
            {
                heading: "Headers, Footers, and Page Numbers",
                text: "A 'Header' is the space at the very top of every page, and a 'Footer' is at the very bottom. Go to Insert > Header to type something you want to repeat on every page (like a book title or your name). You can also use Insert > Page Number to automatically number your pages.",
                imgSrc: "images/11-header-footer.jpg"
            },
            {
                heading: "WordArt & Text Boxes",
                text: "For cool, decorative titles, use 'WordArt' (found in the Insert tab). If you want to place text in a very specific spot on the page—like floating next to an image—use a 'Text Box'. You can drag a Text Box anywhere on the page, unlike normal typing.",
                imgSrc: "images/12-wordart.jpg"
            }
        ]
    },
    {
        id: "batch4",
        title: "Module 4: Advanced Professional Tools",
        level: "Advanced",
        sections: [
            {
                heading: "Find and Replace",
                text: "Imagine writing a 20-page report and realizing you spelled a name wrong everywhere! Don't fix it manually. In the Home tab, click 'Replace'. Tell Word to find the wrong word, and type what to replace it with. It will fix the whole document in one second.",
                imgSrc: "images/13-find-replace.jpg"
            },
            {
                heading: "Spelling & Grammar Check",
                text: "Word helps you avoid mistakes. A red squiggly line under a word means a spelling mistake. A blue squiggly line means a grammar mistake. Right-click the underlined word to see Word's suggestions. You can also run a full check by going to the 'Review' tab and clicking 'Spelling & Grammar'.",
                imgSrc: "images/14-spell-check.jpg"
            },
            {
                heading: "Mail Merge (The Ultimate Tool)",
                text: "Mail Merge is an advanced trick to send customized letters to many people. For example, if you want to send admission letters to 50 new students at Excellent Institute, you don't type 50 letters. You type one letter, link it to an Excel list of student names, and Word automatically creates 50 personalized letters! Find this under the 'Mailings' tab.",
                imgSrc: "images/15-mail-merge.jpg"
            },
            {
                heading: "Generating a Table of Contents",
                text: "For long projects, a Table of Contents (Index) is required. First, highlight your main chapter titles and apply 'Heading 1' or 'Heading 2' styles from the Home tab. Then, go to the 'References' tab and click 'Table of Contents'. Word will instantly create an index with accurate page numbers!",
                imgSrc: "images/16-table-of-contents.jpg"
            }
        ]
    }
];
