class Shape {
    /**
     * @return {Shape}
     */
    clone() {
        return new Shape();
    }
}

/**
 * @param {number} width
 * @param {number} height
 * @return {Rectangle}
 */
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    /**
     * @return {number}
     */
    getWidth() {
        return this.width;
    }

    /**
     * @return {number}
     */
    getHeight() {
        return this.height;
    }

    /**
     * @return {Shape}
     */
    clone() {
        // Write your code here
        return new Rectangle(this.getWidth(), this.getHeight());
    }
}

/**
 * @param {number} length
 * @return {Square}
 */
class Square extends Shape {
    constructor(length) {
        super();
        this.length = length;
    }

    /**
     * @return {number}
     */
    getLength() {
        return this.length;
    }

    /**
     * @return {Shape}
     */
    clone() {
        // Write your code here
        return new Square(this.getLength());
    }
}

class Test {
    /**
     * @param {Shape[]} shapes
     * @return {Shape[]}
     */
    cloneShapes(shapes) {
        // Write your code here
        let shapes_cloned = [];
        for(let i = 0; i < shapes.length; i++){
            shapes_cloned.push(shapes[i].clone());
        }
        return shapes_cloned;
    }
}
