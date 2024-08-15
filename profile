<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image and Description</title>
    <style>
        body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 800px;
    overflow: hidden;
}

.image-section {
    text-align: center;
    padding: 20px;
}

.image-section img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
}

.description-section {
    padding: 20px;
    text-align: center;
}

.description-section h1 {
    margin-bottom: 10px;
    color: #333;
}

.description-section p {
    color: #666;
    line-height: 1.5;
}
</style>
</head>
<body>
    <div class="container">
        <div class="image-section">
            <img src="nishu backgroung.jpg" alt="A description of the image">
        </div>
        <div class="description-section">
            <h1>Image Title</h1>
            <p>This is a brief description of the image. It can include details like what the image is about, where it was taken, or any other relevant information.</p>
        </div>
    </div>
</body>
</html>
