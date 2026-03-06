import { scoreEngine } from './utils/scoreEngine.js';

const participants = [{ id: 'user1', name: 'User 1' }];
const meetings = [
    [
        {
            id: 'user1',
            quizCorrect: -1,
            feedback: false,
            activityCount: 0
        }
    ]
];

const result = scoreEngine('user1', participants, meetings);
console.log('Result:', JSON.stringify(result, null, 2));

if (result.totalDwPoint >= 0) {
    console.log('Test Passed: totalDwPoint is not negative.');
} else {
    console.log('Test Failed: totalDwPoint is negative.');
}
