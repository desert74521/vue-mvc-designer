import Person from './../model/Person';
const personsLast: Person[] = [
    {
        name: '张三',
        age: 28,
        sex: '男',
        address: '西安',
        phone: '139xxxxxxxx',
    },
];
const personsOne: Person[] = [
    {
        name: '张三',
        age: 28,
        sex: '男',
        address: '西安',
        phone: '139xxxxxxxx',
    },
    {
        name: '张三',
        age: 28,
        sex: '男',
        address: '西安',
        phone: '139xxxxxxxx',
    },
    {
        name: '张三',
        age: 28,
        sex: '男',
        address: '西安',
        phone: '139xxxxxxxx',
    },
    {
        name: '张三',
        age: 28,
        sex: '男',
        address: '西安',
        phone: '139xxxxxxxx',
    },
    {
        name: '张三',
        age: 28,
        sex: '男',
        address: '西安',
        phone: '139xxxxxxxx',
    },
    {
        name: '张三',
        age: 28,
        sex: '男',
        address: '西安',
        phone: '139xxxxxxxx',
    },
    {
        name: '张三',
        age: 28,
        sex: '男',
        address: '西安',
        phone: '139xxxxxxxx',
    },
    {
        name: '张三',
        age: 28,
        sex: '男',
        address: '西安',
        phone: '139xxxxxxxx',
    },
    {
        name: '张三',
        age: 28,
        sex: '男',
        address: '西安',
        phone: '139xxxxxxxx',
    },
    {
        name: '张三',
        age: 28,
        sex: '男',
        address: '西安',
        phone: '139xxxxxxxx',
    },
];
export default {
    get(url: string, pageNum: number, pageSize: number ): Promise<Person[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let result = null;
                if (pageNum === 1) {
                    result = personsOne;
                } else {
                    result = personsLast;
                }
                resolve(result);
            }, 1000);
        });
    },
};




