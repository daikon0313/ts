function totalArea(shape1: Shape, shape2: Shape): number {
    return shape1.area() + shape2.area();
  }
  
  const circle = new circle({ radius: 10 });
  const rectangle = new rectangle({ width: 10, height: 20 });
  totalArea(circle, rectangle); // CircleとRectangleをShapeとして扱える