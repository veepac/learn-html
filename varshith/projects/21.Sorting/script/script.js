function bubbleSort() {
    var a = [40, 60, 30, 80, 10];

    //sort algorithm
    for (i = 0; i < a.length - 1; ++i) {
        for (j = 0; j < a.length - i - 1; ++j) {
            //swapping
            if (a[j] > a[j + 1]) {
                const t = a[j];
                a[j] = a[j + 1];
                a[j + 1] = t;
            }
        }
    }

    let s = "";
    for (let i = 0; i < a.length; ++i) {
        s += a[i] + " ";
    }
    //
    console.log(s);
}