// File: script.js

// GUI Assignment: HW4

// Created by: Hunter Spadafora, hunter_spadafora@student.uml.edu
// Created on: 6/15/2022

// Description:
// This is the Javascript code for GUI1 HW4

// Copyright (c) 2022 by Hunter Spadafora. All rights reserved.
// May be freely copied or excerpted for educational purposes with credit
// to the author.
// Most recent update by HZS on 6/24/2022


$().ready(function() {

    // Validate form
    const form = $("form");
    form.validate();

    // Event that runs when the Submit button is clicked.
    document.querySelector("#submit").addEventListener("click", function() {

        // Table will not be generated unless the input boxes have valid values (-50 to 50).
        if (form.valid()) {

            // Get the HTML input elements
            const lbox = document.querySelector("#left");
            const rbox = document.querySelector("#right");
            const tbox = document.querySelector("#top");
            const bbox = document.querySelector("#bottom");

            // Check for value out of range or invalid input
            const array = [lbox, rbox, tbox, bbox];
            array.forEach(function(val) {
                if (val.value > 50) {
                    val.value = 50;
                } else if (val.value < -50) {
                    val.value = -50;
                }
                // This third option filters "junk" like 'e' and '--' that is treated like 0
                else if (val.value == 0) {
                    val.value = 0;
                }
            });

            // Get the values in the HTML input elements
            const left = Number(lbox.value);
            const right = Number(rbox.value);
            const top = Number(tbox.value);
            const bottom = Number(bbox.value);

            // Get the "table" to add the table elements to
            const table = document.querySelector("table");

            // How the loops will grow
            const lr = (left < right) ? (1) : (-1);
            const tb = (top < bottom) ? (1) : (-1);

            // top row
            let row = "<tr><th id=\"corner\">\\</th>";
            for (let i = left; i != right + lr; i += lr) {
                console.log(`Loop 1: i = ${i}`);

                switch (Math.abs(i) % 10) {
                    case 1:
                        row += `<th class=\"one\">${i}</th>`;
                        break;
                    case 2:
                        row += `<th class=\"two\">${i}</th>`;
                        break;
                    case 3:
                        row += `<th class=\"three\">${i}</th>`;
                        break;
                    case 4:
                        row += `<th class=\"four\">${i}</th>`;
                        break;
                    case 5:
                        row += `<th class=\"five\">${i}</th>`;
                        break;
                    case 6:
                        row += `<th class=\"six\">${i}</th>`;
                        break;
                    case 7:
                        row += `<th class=\"seven\">${i}</th>`;
                        break;
                    case 8:
                        row += `<th class=\"eight\">${i}</th>`;
                        break;
                    case 9:
                        row += `<th class=\"nine\">${i}</th>`;
                        break;
                    case 0:
                        row += `<th class=\"ten\">${i}</th>`;
                        break;
                    default:
                        console.error(`k % 10 failed to give a valid answer: k % 10 = ${k % 10}`);
                        break;
                }
            }
            row += "</tr>";

            // 2+ row
            for (let i = top; i != bottom + tb; i += tb) {

                switch (Math.abs(i) % 10) {
                    case 1:
                        row += `<tr><th class=\"one\">${i}</th>`;
                        break;
                    case 2:
                        row += `<tr><th class=\"two\">${i}</th>`;
                        break;
                    case 3:
                        row += `<tr><th class=\"three\">${i}</th>`;
                        break;
                    case 4:
                        row += `<tr><th class=\"four\">${i}</th>`;
                        break;
                    case 5:
                        row += `<tr><th class=\"five\">${i}</th>`;
                        break;
                    case 6:
                        row += `<tr><th class=\"six\">${i}</th>`;
                        break;
                    case 7:
                        row += `<tr><th class=\"seven\">${i}</th>`;
                        break;
                    case 8:
                        row += `<tr><th class=\"eight\">${i}</th>`;
                        break;
                    case 9:
                        row += `<tr><th class=\"nine\">${i}</th>`;
                        break;
                    case 0:
                        row += `<tr><th class=\"ten\">${i}</th>`;
                        break;
                    default:
                        console.error(`k % 10 failed to give a valid answer: k % 10 = ${k % 10}`);
                        break;
                }

                for (let j = left; j != right + lr; j += lr) {
                    const k = i*j;

                    console.log(`Loop 2: i = ${i}, j = ${j}, k = ${k}`);

                    switch (Math.abs(k) % 10) {
                        case 1:
                            row += `<td class=\"one\">${k}</td>`
                            break;
                        case 2:
                            row += `<td class=\"two\">${k}</td>`
                            break;
                        case 3:
                            row += `<td class=\"three\">${k}</td>`
                            break;
                        case 4:
                            row += `<td class=\"four\">${k}</td>`
                            break;
                        case 5:
                            row += `<td class=\"five\">${k}</td>`
                            break;
                        case 6:
                            row += `<td class=\"six\">${k}</td>`
                            break;
                        case 7:
                            row += `<td class=\"seven\">${k}</td>`
                            break;
                        case 8:
                            row += `<td class=\"eight\">${k}</td>`
                            break;
                        case 9:
                            row += `<td class=\"nine\">${k}</td>`
                            break;
                        case 0:
                            row += `<td class=\"ten\">${k}</td>`
                            break;
                        default:
                            console.error(`k % 10 failed to give a valid answer: k % 10 = ${k % 10}`);
                            break;
                    }
                }

                row += "</tr>";
            }
            table.innerHTML = row;
            console.log("Submit button listener complete.");
        }
    });

});

