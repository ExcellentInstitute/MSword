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
    },
    {
        id: "batch5",
        title: "Module 5: Page Design & Backgrounds",
        level: "Intermediate",
        sections: [
            {
                heading: "Adding a Watermark",
                text: "A watermark is a faded image or text behind your main document. It is used to show ownership (like putting 'Excellent Institute' lightly in the background of your study notes) or status (like 'CONFIDENTIAL'). Go to the 'Design' tab and click 'Watermark' to choose a built-in one or upload your own logo.",
                imgSrc: "images/17-watermark.jpg"
            },
            {
                heading: "Page Borders and Colors",
                text: "To make a certificate or a front page look beautiful, you can add a border. In the 'Design' tab, click 'Page Borders'. You can choose simple lines, 3D boxes, or even artistic patterns. You can also change the 'Page Color' if you want to print on a colored background (though usually, we leave it white to save ink!).",
                imgSrc: "images/18-page-borders.jpg"
            },
            {
                heading: "Columns (Newspaper Style)",
                text: "If you are writing a newsletter or a brochure, you might want your text divided into columns, just like a newspaper or a magazine. Highlight your text, go to the 'Layout' tab, click 'Columns', and choose 'Two' or 'Three'.",
                imgSrc: "images/19-columns.jpg"
            }
        ]
    },
    {
        id: "batch6",
        title: "Module 6: Collaboration & Reviewing",
        level: "Advanced",
        sections: [
            {
                heading: "Using Track Changes",
                text: "When a teacher is correcting a student's essay, they use 'Track Changes'. Go to the 'Review' tab and turn it on. Now, any word you delete gets a red line drawn through it, and any new word you type is underlined. It shows exactly what was fixed without permanently destroying the original work.",
                imgSrc: "images/20-track-changes.jpg"
            },
            {
                heading: "Adding Comments",
                text: "Sometimes you do not want to change the text, but you want to leave a note. Highlight a word, go to the 'Review' tab, and click 'New Comment'. A small chat bubble will appear in the margin where you can type feedback like 'Please explain this paragraph better.'",
                imgSrc: "images/21-comments.jpg"
            },
            {
                heading: "Accepting or Rejecting Edits",
                text: "Once a document has tracked changes, the original author must decide to keep them or not. In the 'Review' tab, you can click 'Accept' to make the change permanent, or 'Reject' to put it back to the way it was before.",
                imgSrc: "images/22-accept-reject.jpg"
            }
        ]
    },
    {
        id: "batch7",
        title: "Module 7: Professional Templates & Documents",
        level: "Advanced",
        sections: [
            {
                heading: "Working with Templates",
                text: "Why start from scratch? Word has thousands of free templates. When you open Word, instead of clicking 'Blank Document', search for 'Resume', 'Invoice', 'Admission Form', or 'Certificate'. Word will give you a pre-designed layout where you just fill in your own details.",
                imgSrc: "images/23-templates.jpg"
            },
            {
                heading: "Formatting Technical Text (Code)",
                text: "If you are typing computer programming notes (like Python or SQL), you should use a different font to make it look like real code. Highlight the code, and change the font to 'Consolas' or 'Courier New'. These are 'monospace' fonts where every letter takes up the exact same amount of space.",
                imgSrc: "images/24-code-formatting.jpg"
            },
            {
                heading: "Using the Format Painter",
                text: "The 'Format Painter' is a magic paintbrush! If you have a heading that is Blue, Size 16, and Bold, and you want another heading to look exactly the same, you don't have to do it all over again. Click the good heading, click 'Format Painter' (the yellow brush on the Home tab), and then paint over the new text. It instantly copies the style!",
                imgSrc: "images/25-format-painter.jpg"
            }
        ]
    },
    {
        id: "batch8",
        title: "Module 8: Security & Exporting",
        level: "Advanced",
        sections: [
            {
                heading: "Protecting with a Password",
                text: "If you are typing a highly confidential document, like a commercial lease agreement or exam question papers, you can lock it. Go to 'File' > 'Info' > 'Protect Document' > 'Encrypt with Password'. Warning: If you forget the password, even Microsoft cannot recover the file for you!",
                imgSrc: "images/26-password-protect.jpg"
            },
            {
                heading: "Exporting to PDF",
                text: "Word files (.docx) can look different on different computers. To make sure your document looks exactly the same everywhere (and so nobody can easily edit it), save it as a PDF. Go to 'File' > 'Export' > 'Create PDF/XPS Document'. PDFs are the standard format for sharing official files on WhatsApp or Email.",
                imgSrc: "images/27-export-pdf.jpg"
            },
            {
                heading: "Keyboard Shortcuts Mastery",
                text: "True professionals don't use the mouse for everything. Memorize these: Ctrl+C (Copy), Ctrl+V (Paste), Ctrl+Z (Undo a mistake), Ctrl+A (Select everything), and Ctrl+B (Bold). Using shortcuts makes your typing speed double!",
                imgSrc: "images/28-keyboard-shortcuts.jpg"
            }
        ]
    }
];
