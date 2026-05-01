// word-data.js
// Excellent Institute - MS Word Complete Book Syllabus

const wordBookData = [
    {
        id: "chapter1",
        title: "Chapter 1: The Absolute Basics",
        topics: [
            {
                heading: "Finding and Opening MS Word",
                text: "Before we start typing, we need to open the program. Look for a dark blue icon with a white letter 'W' on your computer screen or in the Start menu. This is the Microsoft Word logo. Double-click this icon to start!",
                imgSrc: "images/0-word-logo.jpg"
            },
            {
                heading: "What is MS Word?",
                text: "Microsoft Word is a digital notebook used for typing. You can use it to write letters, school essays, resumes, and project reports. When you open the program, click on 'Blank Document' to get a clean, fresh page.",
                imgSrc: "images/1-start-screen.jpg"
            },
            {
                heading: "The Ribbon (Your Tool Box)",
                text: "Look at the top of your screen. That thick bar full of buttons is called the 'Ribbon'. It is divided into different 'Tabs' like Home, Insert, and Layout. The 'Home' tab is the most important—it holds your everyday tools for typing.",
                imgSrc: "images/2-the-ribbon.jpg"
            },
            {
                heading: "How to Save Your Work",
                text: "Computers can crash or lose power. To make sure you don't lose your hard work, you must 'Save' it. Click on 'File' at the top left, then 'Save As'. Choose a folder on your computer and give your file a simple name. Pro Tip: Press 'Ctrl + S' on your keyboard to save quickly!",
                imgSrc: "images/3-save-as.jpg"
            }
        ]
    },
    {
        id: "chapter2",
        title: "Chapter 2: Text Formatting (Making it Look Good)",
        topics: [
            {
                heading: "Changing the Font",
                text: "You can change how your handwriting looks on the screen. Highlight your text with your mouse, then look at the Home tab. You can choose different handwriting styles, make the text bigger, or change its color.",
                imgSrc: "images/4-font-formatting.jpg"
            },
            {
                heading: "Bold, Italic, and Underline",
                text: "To make important words stand out, highlight them and click 'B' to make them Bold (thicker), 'I' to make them Italic (slanted), or 'U' to Underline them.",
                imgSrc: "images/bold-italic.jpg"
            },
            {
                heading: "The Magic Format Painter",
                text: "If you make a title big and blue, and you want your next title to look exactly the same, click the first title, click the 'Format Painter' brush icon, and wipe it over the new text. It copies the design instantly!",
                imgSrc: "images/15-format-painter.jpg"
            }
        ]
    },
    {
        id: "chapter3",
        title: "Chapter 3: Paragraphs & Lists",
        topics: [
            {
                heading: "Lining Up Your Text (Alignment)",
                text: "In the Home tab, you can change how your words sit on the page. Left is for normal typing, Center is for main titles, Right is for dates on letters, and Justify makes both the left and right sides perfectly straight.",
                imgSrc: "images/5-alignment.jpg"
            },
            {
                heading: "Making Neat Lists (Bullets)",
                text: "If you need to write a list of items, do not type numbers manually. Use the 'Bullets' or 'Numbering' buttons in the Home tab. Every time you press the 'Enter' key, it automatically creates the next neat dot or number!",
                imgSrc: "images/6-bullet-lists.jpg"
            }
        ]
    },
    {
        id: "chapter4",
        title: "Chapter 4: Arranging & Printing the Page",
        topics: [
            {
                heading: "Setting Up Page Margins",
                text: "Go to the 'Layout' tab. 'Margins' are the blank white borders around the edges of your paper. Make the margins 'Narrow' to fit more words on the page, or keep it on 'Normal' for standard printing.",
                imgSrc: "images/7-page-layout.jpg"
            },
            {
                heading: "Newspaper Columns",
                text: "If you want your text to read side-by-side, exactly like a magazine or a newspaper, go to the 'Layout' tab, click 'Columns', and choose 'Two'. Word will split your text perfectly down the middle.",
                imgSrc: "images/19-columns.jpg"
            },
            {
                heading: "Printing Your Document",
                text: "When you are ready to put your work on real paper, go to 'File' and click 'Print' (or press Ctrl + P). The screen will show you exactly how the paper will look before you click the Print button.",
                imgSrc: "images/8-print-preview.jpg"
            }
        ]
    },
    {
        id: "chapter5",
        title: "Chapter 5: Adding Pictures & Tables",
        topics: [
            {
                heading: "Inserting Pictures and Shapes",
                text: "Go to the 'Insert' tab and click 'Pictures' to add a photo from your computer. You can also click 'Shapes' to draw perfect arrows or stars. Once added, drag the corners to resize them.",
                imgSrc: "images/9-insert-pictures.jpg"
            },
            {
                heading: "Drawing Tables",
                text: "Tables are boxes that keep information organized, like a class routine. Go to the 'Insert' tab and click 'Table'. Choose how many boxes you need, and it drops a grid onto your page so you can type inside it.",
                imgSrc: "images/10-insert-tables.jpg"
            }
        ]
    },
    {
        id: "chapter6",
        title: "Chapter 6: Page Design & Backgrounds",
        topics: [
            {
                heading: "Headers and Footers",
                text: "A 'Header' is a special space at the top of the page, and a 'Footer' is at the bottom. If you type your school name in the Header (found in the Insert tab), Word automatically copies it to the top of every single page!",
                imgSrc: "images/11-header-footer.jpg"
            },
            {
                heading: "Adding a Watermark",
                text: "A watermark is a faded word or picture hiding behind your text. You can put 'Excellent Institute' lightly in the background. Go to the 'Design' tab and click 'Watermark'.",
                imgSrc: "images/17-watermark.jpg"
            },
            {
                heading: "Page Borders",
                text: "To make a certificate or project look beautiful, add a border. In the 'Design' tab, click 'Page Borders'. You can choose simple black lines or artistic designs.",
                imgSrc: "images/18-page-borders.jpg"
            }
        ]
    },
    {
        id: "chapter7",
        title: "Chapter 7: Office Tools & Automation",
        topics: [
            {
                heading: "Checking for Spelling Mistakes",
                text: "If you type a word wrong, Word puts a red line under it. Just 'right-click' on the underlined word with your mouse, and the computer will suggest the correct spelling.",
                imgSrc: "images/14-spell-check.jpg"
            },
            {
                heading: "Find and Replace",
                text: "If you spelled a name wrong 50 times in a long story, don't fix it manually. In the Home tab, click 'Replace'. Tell the computer the wrong word, and the right word. It fixes all of them in one second.",
                imgSrc: "images/13-find-replace.jpg"
            },
            {
                heading: "Mail Merge (The Magic Letter Tool)",
                text: "If you need to send letters to 50 students, you don't type 50 letters. Type one single letter, link it to a list of student names, and Word will automatically print 50 personalized letters! Find this in the 'Mailings' tab.",
                imgSrc: "images/20-mail-merge.jpg"
            }
        ]
    },
    {
        id: "chapter8",
        title: "Chapter 8: Reviewing, Saving & Security",
        topics: [
            {
                heading: "Using Track Changes",
                text: "When a teacher corrects a student's essay, they use 'Track Changes' in the 'Review' tab. Any deleted word gets a red line through it, and new words are underlined. It shows exactly what was fixed.",
                imgSrc: "images/22-track-changes.jpg"
            },
            {
                heading: "Locking with a Password",
                text: "If you are writing a private document, lock it. Go to 'File' > 'Info' > 'Protect Document' > 'Encrypt with Password'. Be careful: If you forget the password, you can never open it again!",
                imgSrc: "images/26-password-protect.jpg"
            },
            {
                heading: "Saving as a PDF File",
                text: "To freeze your document so it looks perfect on every phone and computer, save it as a PDF. Go to 'File', click 'Export', and choose 'Create PDF'. This is the safest way to send files on WhatsApp.",
                imgSrc: "images/27-export-pdf.jpg"
            }
        ]
    }
];

// ============================================================================
// 🛑 HOW TO ADD A WHOLE NEW CHAPTER AT THE END 🛑
// ============================================================================
// To add Chapter 9, paste the template below right above this closing bracket ];
// Make sure to add a comma `,` before pasting.
//
// ,{
//     id: "chapter9",
//     title: "Chapter 9: Keyboard Shortcuts",
//     topics: [
//         {
//             heading: "Copy and Paste",
//             text: "Press Ctrl+C to copy and Ctrl+V to paste.",
//             imgSrc: "images/shortcuts.jpg"
//         }
//     ]
// }
// ============================================================================
