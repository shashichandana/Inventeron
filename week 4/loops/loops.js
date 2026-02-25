// 1️⃣ FOR LOOP - Star Pattern
function starPattern() {
    let pattern = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }
        pattern += "\n";
    }
    alert("Star Pattern:\n\n" + pattern);
}


// 2️⃣ WHILE LOOP - Find Largest
function findLargest() {
    let arr = [12, 45, 7, 89, 23];
    let i = 0;
    let largest = arr[0];

    while (i < arr.length) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
        i++;
    }

    alert("Input: [" + arr.join(", ") + "]\nLargest number among inputs: " + largest);
}


// 3️⃣ DO WHILE LOOP - Find Smallest
function findSmallest() {
    let arr = [12, 45, 7, 89, 23];
    let i = 0;
    let smallest = arr[0];

    do {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
        i++;
    } while (i < arr.length);

    alert("Input: [" + arr.join(", ") + "]\nSmallest number among inputs: " + smallest);
}


// 4️⃣ FOR...OF LOOP - Second Largest
function secondLargest() {
    let arr = [12, 45, 7, 89, 23];
    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }

    alert("Input: [" + arr.join(", ") + "]\nSecond largest number among inputs: " + second);
}


// 5️⃣ FOR...IN LOOP - Count Object Properties
function countProperties() {
    let student = {
        name: "Shashi",
        age: 21,
        branch: "CSE",
        college: "Sir MVIT"
    };

    let count = 0;

    for (let key in student) {
        count++;
    }

    alert("Object: " + JSON.stringify(student) + "\nTotal properties in the object: " + count);
}


// 6️⃣ BREAK Example
function breakExample() {
    const totalDesignedRuns = 20;
    let actualRuns = 0;
    let stoppedAt = null;

    for (let i = 1; i <= totalDesignedRuns; i++) {
        actualRuns++;
        if (i % 7 === 0) {
            stoppedAt = i;
            break;
        }
    }

    const summary = stoppedAt
        ? `Break Demo: Ran ${actualRuns}/${totalDesignedRuns} iterations; stopped at ${stoppedAt}`
        : `Break Demo: completed ${totalDesignedRuns}/${totalDesignedRuns} iterations`;

    alert(summary);
}


// 7️⃣ CONTINUE Example
function continueExample() {
    let result = "";

    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            continue;
        }
        result += i + " ";
    }

    alert("Continue Demo (Odd Numbers):\n\n" + result);
}




// 9️⃣ NESTED LOOP Pattern (Number Triangle)
function nestedLoopPattern() {
    let pattern = "";

    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += j + " ";
        }
        pattern += "\n";
    }

    alert("Nested Loop Pattern:\n\n" + pattern);
}