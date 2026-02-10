class Node{
	constructor(data){
		this.value = data;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree{
	constructor(){
		this.root = null;
	}

	insert(x){
		const newNode = new Node(x);
		if(!this.root){
			this.root = newNode;
			return;
		}
		const queue = [this.root];

		while(queue.length){
			const cur = queue.shift();

			if(!cur.left){
				cur.left = newNode;
				return;
			}

			if(!cur.right){
				cur.right = newNode;
				return;
			}
			queue.push(cur.left,cur.right);
		}
	}

	read(){
		const queue = [this.root];
		const result = [];
		while(queue.length){
			const cur = queue.shift();
			result.push(cur.value)
			if(cur.left){
				queue.push(cur.left);
			}
			if(cur.right){
				queue.push(cur.right);
			}
		}
		console.log(result)
		return result;
	}

	preOrder(){
		const stack = [this.root];
		const result = [];

		while(stack.length){
			const cur = stack.pop();
			result.push(cur.value);
			if(cur.right){
				stack.push(cur.right);
			}
			if(cur.left){
				stack.push(cur.left);
			}
			//queue.push(cur.left,cur.right);
		}
		console.log(result);
		return result;
	}
}

const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.read();
tree.preOrder();
