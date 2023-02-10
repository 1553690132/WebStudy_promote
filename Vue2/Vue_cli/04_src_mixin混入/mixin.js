// 混入
export const hunhe = {
    methods: {
        showName() {
            alert(this.name);
        },
    },
    mounted() {
        console.log('Hello Vue!');
    },
}

export const hunhe2 = {
    name:'School',
    data() {
        return {
            name:'LWH',
            address:'Beijing'
        }
    }
}