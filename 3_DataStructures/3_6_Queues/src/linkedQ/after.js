class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class LinkedQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    isEmpty() {
        if (this.head === null) {
            return true;
        } else {
            return false;
        }
    }

    put(value) {
        if (this.head === null) {
            this.head = new Node(value, null, null);
            this.tail = this.head;
        } else {
            this.tail = new Node(value, this.tail, null);
            this.tail.prev.next = this.tail;
        }
    }

    get() {
        let value = undefined;
        if (this.head === null) {
            return undefined;
        } else if (this.head === this.rear) {
            value = this.head.value;
            this.head = null;
            this.rear = null;
        } else {
            value = this.head.value;
            this.head = this.head.next;
            this.head.prev = null;
        }
        return value;
    }


    print() {
        let curr = this.head;

        if (curr === null) {
            console.log('[]');
            return;
        }

        let s = '';
        while(curr !== null) {
            s += `${curr.value} `
            curr = curr.next;
        }
        console.log(`[${s}]`);
    }
}


queue = new LinkedQueue();
queue.print();

queue.put(1);
queue.put(2);
queue.put(3);
queue.put(4);
queue.put(5);
queue.put(6);
queue.print();

console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
queue.print();

queue.put(4);
queue.put(5);
queue.put(6);
queue.print();

console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
queue.print();