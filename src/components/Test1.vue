<script>
export default {
    data: () => ({
        tests: [
            { name: "Test 1", myString: "xxxy", maxRepeat: 2, testCompleted: false, myResult: "" },
            { name: "Test 2", myString: "xxyy", maxRepeat: 1, testCompleted: false, myResult: "" },
            { name: "Test 3", myString: "xxxxyyyyxx", maxRepeat: 1, testCompleted: false, myResult: "" },
            { name: "Test 4", myString: "aaaabbbbccccdddd", maxRepeat: 1, testCompleted: false, myResult: "" },
            { name: "Test 5", myString: "aaaabbbbccccdddd", maxRepeat: 2, testCompleted: false, myResult: "" },
            { name: "Test 6", myString: "aaaabbbbccccdddd", maxRepeat: 3, testCompleted: false, myResult: "" },
        ]
    }),
    methods: {
        formatString: function (test) {
            const { result, stack } = test.myString.split('').reduce((agg, next) => {
                if (!agg.stack.length) {
                    return { result: agg.result, stack: [next] };
                } else if (next !== agg.stack[0]) {
                    return { result: agg.result + agg.stack.slice(0, test.maxRepeat).join(''), stack: [next] };
                } else {
                    return { result: agg.result, stack: agg.stack.concat(next) };
                }
            }, { result: '', stack: [] });
            test.testCompleted = true;
            test.myResult = result + stack.slice(0, test.maxRepeat).join('');
        }
    }
}
</script>

<template>
    <div>
        <h2>StringFormatter</h2>
        <ol>
            <li v-for="test in tests">
                <label>
                    <input type="button" v-on:click="formatString(test)" :value="test.name">
                    &nbsp;
                    <span v-if="test.testCompleted">
                        {{ test.name }} Completed Successfully. Result is:
                    </span>
                    <span v-if="test.testCompleted">
                        {{ test.myResult }}
                    </span>
                </label>
            </li>
        </ol>
    </div>
</template>