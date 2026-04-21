(function solve() {
    String.prototype.ensureStart = function (str) {
        return this.startsWith(str) ? this.toString() : str + this;
    };

    String.prototype.ensureEnd = function (str) {
        return this.endsWith(str) ? this.toString() : this + str;
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    String.prototype.truncate = function (n) {
        const current = this.toString();

        if (current.length <= n) {
            return current;
        }

        if (n < 4) {
            return ".".repeat(n);
        }

        const words = current.split(" ");

        if (words.length === 1) {
            return current.slice(0, n - 3) + "...";
        }

        let result = "";

        for (const word of words) {
            const next = result ? result + " " + word : word;

            if (next.length + 3 > n) {
                break;
            }

            result = next;
        }

        return result + "...";
    };

    String.format = function (string, ...params) {
        let result = string;

        for (let i = 0; i < params.length; i++) {
            result = result.replace(`{${i}}`, params[i]);
        }

        return result;
    };
})();
