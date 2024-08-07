var sum_to_n_c = function (n) {
    if (n <= 1) {
        return n;
    } else {
        return n + sum_to_n_c(n - 1);
    }
};
