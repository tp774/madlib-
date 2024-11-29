const express = require('express');
const logger = require('morgan');

const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));

server.post('/ITC505/lab-7/index.html', (req, res) => {
    const { magicalCreature, enchantedObject, heroAction, mysteriousAdverb, legendaryLocation } = req.body;

    const css = `
        <style>
            body {
                font-family: 'Playfair Display', serif;
                background: linear-gradient(90deg, #3a2a1a, #1a2a1a);
                color: #eae5c9;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                margin: 0;
                padding: 2rem;
            }
            .story-container {
                background: rgba(58, 42, 26, 0.9);
                border: 2px solid #eae5c9;
                border-radius: 15px;
                padding: 2rem;
                max-width: 500px;
                width: 100%;
                text-align: center;
            }
            .story {
                font-size: 1.5rem; /* Increased font size for better visibility */
                margin-bottom: 1.5rem;
                line-height: 1.6; /* Improved line spacing for readability */
                color: #ffd700; /* Gold color for the story text */
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Adding subtle shadow for better contrast */
            }
            a {
                color: #ffd700; /* Gold for button */
                text-decoration: none;
                font-weight: bold;
                font-family: 'Playfair Display', serif;
                border: 2px solid #ffd700;
                padding: 0.75rem 1.25rem;
                border-radius: 10px;
                background: transparent;
                transition: all 0.3s ease;
                display: inline-block;
                margin-top: 1rem;
            }
            a:hover {
                background: #ffd700;
                color: #3a2a1a;
                transform: scale(1.1);
                box-shadow: 0 0 10px #ffd700;
            }
            .start-another-quest {
                color: #eae5c9;
                font-weight: bold;
                text-decoration: none;
                border: 2px solid #ffd700;
                padding: 0.75rem 1.25rem;
                border-radius: 10px;
                background: transparent;
                transition: all 0.3s ease;
                display: inline-block;
                margin-top: 2rem;
            }
            .start-another-quest:hover {
                background: #ffd700;
                color: #3a2a1a;
                transform: scale(1.1);
                box-shadow: 0 0 10px #ffd700;
            }
        </style>
    `;

    if (!magicalCreature || !enchantedObject || !heroAction || !mysteriousAdverb || !legendaryLocation) {
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Quest Incomplete</title>
                ${css}
            </head>
            <body>
                <div class="story-container">
                    <p class="story">Please complete all fields to embark on your fantasy adventure!</p>
                    <a href="/ITC505/lab-7/index.html">Go Back</a>
                </div>
            </body>
            </html>
        `);
        return;
    }

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Your Fantasy Adventure</title>
            ${css}
        </head>
        <body>

            <div class="story-container">
                <p class="story">
                    In the enchanted land of ${legendaryLocation}, a group of brave ${magicalCreature} discovered the fabled ${enchantedObject}. They set out to ${heroAction} ${mysteriousAdverb}, forever altering the fate of the kingdom.
                </p>
                <a href="/ITC505/lab-7/index.html" class="start-another-quest">Start Another Quest</a>
            </div>
        </body>
        </html>
    `);
});

server.listen(80, () => console.log('Server running on port 80'));
