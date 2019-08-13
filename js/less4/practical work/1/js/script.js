'use strict'
// Создать обьект с категориями траты и узнать на какую больше потраченнно мани
const information = {
    categories: [
        {name: 'groceries', spent: 21, icon: 1},
        {name: 'transport', spent: 51, icon: 3},
        {name: 'restaurant', spent: 21332, icon: 2},
        {name: 'leisure', spent: 2111, icon: 1},
    ],
    getMostSpent () {
        let i = 0;
        for (const mostSpent of this.categories) {
            if (mostSpent.spent > i) {
               i = mostSpent.spent;
            };
        }
        return i;
    },
};
console.log(information.getMostSpent());