import { scoreEngine } from './utils/scoreEngine.js';
import { participants } from './data/participants.js';
import { meetweek1 } from './data/meet-week1.js';
import { meetweek2 } from './data/meet-week2.js';

const meetings = [meetweek1, meetweek2];

// Test case 1: DW-364 (Saeful Risqi)
// Week 1: quizCorrect: 15 (Present)
// Week 2: quizCorrect: -1 (Absent) - Should NOT reduce points
const result364 = scoreEngine('DW-364', participants, meetings);
console.log('Result for DW-364:', JSON.stringify(result364, null, 2));

// Test case 2: DW-999 (Irsyad Mus)
// Week 1: quizCorrect: -1 (Absent)
// Week 2: quizCorrect: 10 (Present)
const result999 = scoreEngine('DW-999', participants, meetings);
console.log('Result for DW-999:', JSON.stringify(result999, null, 2));

if (result364.totalDwPoint === 35) {
    console.log('Test Passed: DW-364 kept their points from Week 1.');
} else {
    console.log('Test Failed: DW-364 points changed unexpectedly:', result364.totalDwPoint);
}
