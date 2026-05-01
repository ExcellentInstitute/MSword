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
        title: "Chapter 2: Typing & Moving Text",
        topics: [
            {
                heading: "Cut, Copy, and Paste",
                text: "Do not type the same sentence twice. Highlight text and click 'Copy' (or Ctrl+C) to duplicate it. If you want to move the text entirely, use 'Cut' (or Ctrl+X) to pick it up. Then click anywhere else and use 'Paste' (or Ctrl+V) to drop it down.",
                imgSrc: "images/45-cut-copy-paste.jpg"
            },
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
        title: "Chapter 3: Paragraphs & Spacing",
        topics: [
            {
                heading: "Lining Up Your Text (Alignment)",
                text: "In the Home tab, you can change how your words sit on the page. Left is for normal typing, Center is for main titles, Right is for dates on letters, and Justify makes both the left and right sides perfectly straight.",
                imgSrc: "images/5-alignment.jpg"
            },
            {
                heading: "Line Spacing (Breathing Room)",
                text: "If your text looks too crowded, you can add space between the lines. Highlight your paragraph, look in the Home tab for a button with up and down arrows, and choose '1.5' or '2.0'. Teachers often ask for 'double-spaced' essays!",
                imgSrc: "images/28-line-spacing.jpg"
            },
            {
                heading: "Making Neat Lists (Bullets)",
                text: "If you need to write a list of items, do not type numbers manually. Use the 'Bullets' or 'Numbering' buttons in the Home tab. Every time you press the 'Enter' key, it automatically creates the next neat dot or number!",
                imgSrc: "images/6-bullet-lists.jpg"
            },
            {
                heading: "Using the Ruler for Indents (Tabs)",
                text: "When writing a formal letter, do not press the 'Spacebar' 20 times to move your text. Instead, press the 'Tab' key on your keyboard to jump perfectly. You can also drag the little triangles on the top 'Ruler' to slide whole paragraphs left or right.",
                imgSrc: "images/46-indents-tabs.jpg"
            }
        ]
    },
    {
        id: "chapter4",
        title: "Chapter 4: Setting Up the Page",
        topics: [
            {
                heading: "Page Size and Orientation",
                text: "Before typing, go to the 'Layout' tab. Click 'Size' to make sure you are using 'A4' paper. Click 'Orientation' to flip your paper from Portrait (tall) to Landscape (wide), which is great for certificates.",
                imgSrc: "images/41-orientation-size.jpg"
            },
            {
                heading: "Setting Up Page Margins",
                text: "Go to the 'Layout' tab. 'Margins' are the blank white borders around the edges of your paper. Make the margins 'Narrow' to fit more words on the page, or keep it on 'Normal' for standard printing.",
                imgSrc: "images/7-page-layout.jpg"
            },
            {
                heading: "Page Breaks (No More Pressing Enter)",
                text: "When you finish a chapter and want to start on a fresh page, do NOT press 'Enter' 20 times! Instead, go to the 'Insert' tab and click 'Page Break'. It instantly pushes you to the top of the next page perfectly.",
                imgSrc: "images/35-page-break.jpg"
            },
            {
                heading: "Newspaper Columns",
                text: "If you want your text to read side-by-side, exactly like a magazine or a newspaper, go to the 'Layout' tab, click 'Columns', and choose 'Two'. Word will split your text perfectly down the middle.",
                imgSrc: "images/19-columns.jpg"
            }
        ]
    },
    {
        id: "chapter5",
        title: "Chapter 5: Pictures & Shapes",
        topics: [
            {
                heading: "Inserting Pictures and Shapes",
                text: "Go to the 'Insert' tab and click 'Pictures' to add a photo from your computer. You can also click 'Shapes' to draw perfect arrows or stars. Once added, drag the corners to resize them.",
                imgSrc: "images/9-insert-pictures.jpg"
            },
            {
                heading: "Wrap Text (Fixing Stubborn Pictures)",
                text: "Have you ever inserted a picture, and it ruined all your paragraphs? Click on the picture, look for the little rainbow 'Layout Options' icon next to it, and choose 'Square'. Now, your text will beautifully flow around the image instead of breaking!",
                imgSrc: "images/42-wrap-text.jpg"
            },
            {
                heading: "SmartArt (Easy Flowcharts)",
                text: "If you want to draw a cycle or an organization chart, do not draw circles one by one. Go to the 'Insert' tab and click 'SmartArt'. Word gives you beautiful, colorful, ready-made diagrams where you just type the words.",
                imgSrc: "images/32-smartart.jpg"
            },
            {
                heading: "Floating Text Boxes",
                text: "Normally, Word forces you to type line by line. But what if you want text floating in the middle of a picture? Go to the 'Insert' tab and click 'Text Box'. It acts like a digital sticker—you can type inside it and drag it anywhere.",
                imgSrc: "images/36-text-box.jpg"
            }
        ]
    },
    {
        id: "chapter6",
        title: "Chapter 6: Tables & Charts",
        topics: [
            {
                heading: "Drawing Tables",
                text: "Tables are boxes that keep information organized, like a class routine. Go to the 'Insert' tab and click 'Table'. Choose how many boxes you need, and it drops a grid onto your page so you can type inside it.",
                imgSrc: "images/10-insert-tables.jpg"
            },
            {
                heading: "Inserting Charts and Graphs",
                text: "If you want to show a company's profit or student attendance, use a graph! Go to the 'Insert' tab and click 'Chart'. Choose a Pie Chart or a Bar Graph. Type your numbers in the box that pops up, and the chart will build itself.",
                imgSrc: "images/44-charts.jpg"
            }
        ]
    },
    {
        id: "chapter7",
        title: "Chapter 7: Page Design & Backgrounds",
        topics: [
            {
                heading: "Ready-Made Cover Pages",
                text: "If you are printing a big project report, it needs a beautiful front page. Go to the 'Insert' tab and click 'Cover Page'. Word gives you amazing, colorful front pages where you just type your name and the project title.",
                imgSrc: "images/40-cover-page.jpg"
            },
            {
                heading: "Headers and Footers",
                text: "A 'Header' is a special space at the top of the page, and a 'Footer' is at the bottom. If you type your school name in the Header (found in the Insert tab), Word automatically copies it to the top of every single page!",
                imgSrc: "images/11-header-footer.jpg"
            },
            {
                heading: "Adding a Watermark",
                text: "A watermark is a faded word or picture hiding behind your text. You can put your institute's name lightly in the background. Go to the 'Design' tab and click 'Watermark'.",
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
        id: "chapter8",
        title: "Chapter 8: Helpful View & Review Tools",
        topics: [
            {
                heading: "Zoom In and The Ruler",
                text: "If the text is too small, use the 'Zoom' slider at the bottom right of the screen to look closer. Also, go to the 'View' tab and turn on the 'Ruler' so you can see the exact measurements of your paper.",
                imgSrc: "images/33-the-ruler.jpg"
            },
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
                heading: "The Word Count Tool",
                text: "If a teacher asks you to write a '500-word essay', look at the very bottom left corner of your Word screen. It shows exactly how many pages and words you have typed so far.",
                imgSrc: "images/39-word-count.jpg"
            }
        ]
    },
    {
        id: "chapter9",
        title: "Chapter 9: Special Text & Links",
        topics: [
            {
                heading: "Drop Cap (Storybook Letters)",
                text: "Have you ever seen a fairy tale book where the very first letter of the story is huge? Click on the first paragraph of your story, go to the 'Insert' tab, and click 'Drop Cap'.",
                imgSrc: "images/37-drop-cap.jpg"
            },
            {
                heading: "Subscript and Superscript",
                text: "If you need to type a math equation like (X squared), you need tiny letters. In the Home tab, click the 'X₂' button to make text drop down (Subscript), or click the 'X²' button to make text float up (Superscript).",
                imgSrc: "images/30-sub-super-script.jpg"
            },
            {
                heading: "Inserting Symbols",
                text: "You won't find the Indian Rupee symbol (₹) or a Copyright sign (©) on your regular keyboard. To add these, go to the 'Insert' tab, click 'Symbol' on the far right, and pick the one you need.",
                imgSrc: "images/31-symbols.jpg"
            },
            {
                heading: "Adding Web Links (Hyperlinks)",
                text: "You can turn a normal word into a clickable link. Highlight some text, right-click it, and choose 'Link'. Type in a website address. The text will turn blue, and when someone clicks it, the internet opens!",
                imgSrc: "images/38-hyperlinks.jpg"
            }
        ]
    },
    {
        id: "chapter10",
        title: "Chapter 10: Professional Automation",
        topics: [
            {
                heading: "Automatic Table of Contents (Index)",
                text: "If you type a big book, you need an Index. Highlight your chapter titles and click 'Heading 1' in the Home tab. Then, go to the 'References' tab and click 'Table of Contents'. Word will automatically build an index page with exact page numbers!",
                imgSrc: "images/43-table-of-contents.jpg"
            },
            {
                heading: "Mail Merge (The Magic Letter Tool)",
                text: "If you need to send welcome letters to 50 8th class students, you don't type 50 letters. Type one single letter, link it to an Excel list of student names, and Word will automatically print 50 personalized letters! Find this in the 'Mailings' tab.",
                imgSrc: "images/20-mail-merge.jpg"
            }
        ]
    },
    {
        id: "chapter11",
        title: "Chapter 11: Reviewing & Security",
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
                heading: "Printing and Saving as a PDF",
                text: "To freeze your document so the formatting never breaks when you send it to someone else, save it as a PDF. Go to 'File', click 'Export', and choose 'Create PDF'. This is the safest way to send files to be printed.",
                imgSrc: "images/27-export-pdf.jpg"
            }
        ]
    },
    {
        id: "chapter12",
        title: "Chapter 12: Modern Magic (2024 Tools)",
        topics: [
            {
                heading: "Voice Typing (Dictation)",
                text: "Are your fingers tired? You don't have to type! In the Home tab, look for a 'Microphone' icon called Dictate. Click it, talk clearly into your computer, and Word will magically type your spoken words right onto the screen.",
                imgSrc: "images/47-dictation.jpg"
            },
            {
                heading: "Translating Languages",
                text: "If you write an English sentence and need to see it in Hindi or another language, Word can help. Go to the 'Review' tab and click 'Translate'. It changes the words instantly without you having to search on the internet.",
                imgSrc: "images/48-translate.jpg"
            },
            {
                heading: "Reading the Screen Aloud",
                text: "Sometimes it is easier to hear your story to catch mistakes. Go to the 'Review' tab and click 'Read Aloud'. The computer will speak your entire document back to you out loud so you can rest your eyes.",
                imgSrc: "images/49-read-aloud.jpg"
            },
            {
                heading: "The Master Cheat Sheet",
                text: "To be a true computer master, memorize these five magic keyboard buttons: Ctrl+A (Select everything), Ctrl+C (Copy), Ctrl+V (Paste), Ctrl+Z (Undo a mistake), and Ctrl+S (Save your work instantly).",
                imgSrc: "images/50-shortcuts.jpg"
            }
        ]
    },
    {
        id: "chapter13",
        title: "Chapter 13: School Reports & Drawing",
        topics: [
            {
                heading: "Adding Footnotes",
                text: "If you are writing a history project and want to add a tiny note at the bottom of the page to explain a hard word, use a Footnote. Go to the 'References' tab and click 'Insert Footnote'. It puts a tiny number next to your word and gives you space at the bottom to explain it.",
                imgSrc: "images/51-footnotes.jpg"
            },
            {
                heading: "Search the Web Inside Word",
                text: "Did you know you don't have to open Google Chrome to search for information? Highlight a word you don't understand, right-click it, and choose 'Search'. A side panel will open showing you dictionary meanings and internet results right inside Word!",
                imgSrc: "images/52-smart-lookup.jpg"
            },
            {
                heading: "The Draw Tab (Digital Pen)",
                text: "If you have a touchscreen laptop or just want to draw a circle around something with your mouse, go to the 'Draw' tab. You can pick up digital pens, highlighters, and erasers to literally draw on your document like a piece of paper.",
                imgSrc: "images/53-draw-tab.jpg"
            }
        ]
    },
    {
        id: "chapter14",
        title: "Chapter 14: The Final Office Secrets",
        topics: [
            {
                heading: "Printing Envelopes & Stickers",
                text: "Offices do not write addresses by hand! Go to the 'Mailings' tab and click 'Envelopes' or 'Labels'. You can type your delivery address here, put a blank envelope or sticker sheet into your printer, and Word will print it perfectly on the front.",
                imgSrc: "images/54-envelopes.jpg"
            },
            {
                heading: "Comparing Two Documents",
                text: "Imagine your friend changes your project file, but they forgot to tell you what they changed. Go to the 'Review' tab and click 'Compare'. You can open the old file and the new file, and Word will highlight exactly which words were changed, added, or deleted!",
                imgSrc: "images/55-compare-docs.jpg"
            },
            {
                heading: "Recovering Unsaved Files",
                text: "This is the ultimate lifesaver! If your computer dies before you saved your work, do not panic. Open Word, go to 'File' > 'Info' > 'Manage Document', and click 'Recover Unsaved Documents'. Word secretly saves backup copies of your work just in case of emergencies.",
                imgSrc: "images/56-recover-unsaved.jpg"
            }
        ]
    }
    ,{
        id: "chapter15",
        title: "Chapter 15: Essential Finishing Touches",
        topics: [
            {
                heading: "Adding Page Numbers",
                text: "If you are writing a long story, you need page numbers so people don't get lost reading it. Go to the 'Insert' tab, click 'Page Number', and choose if you want the numbers to show up at the top or the bottom of the paper.",
                imgSrc: "images/57-page-numbers.jpg"
            },
            {
                heading: "Text Highlight Color",
                text: "Just like using a neon marker pen on a real book, you can highlight important sentences in Word. Highlight your text, look for the little 'ab' button with a pen next to it in the Home tab, and choose bright yellow or green so you don't forget it.",
                imgSrc: "images/58-text-highlight.jpg"
            },
            {
                heading: "Undo and Redo (The Time Machine)",
                text: "If you accidentally delete a whole paragraph, do not panic! Look at the very top left corner of your screen for a backward arrow. This is the 'Undo' button (Ctrl+Z), and it acts like a time machine to bring back your mistakes. The forward arrow is 'Redo' (Ctrl+Y).",
                imgSrc: "images/59-undo-redo.jpg"
            },
            {
                heading: "How to Print Correctly",
                text: "When you are ready to put your work on real paper, go to 'File' and click 'Print' (or press Ctrl + P). The screen will show you exactly how the paper will look. You can select your printer, type how many copies you want, and click the big Print button.",
                imgSrc: "images/60-print-preview.jpg"
            }
        ]
    }
];
