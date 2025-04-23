const canvas = document.getElementById("img-result");

const padding = 8;
const margin = 4;
const imgSize = (512 - (2 * padding) - (4 * margin)) / 5;
const cornerRadius = 16;

function CreateImage(){
    var boardText = document.getElementById("board-id").value;
    var boardData = decodeBoard(boardText);

    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, 512, 512);

    var grad = ctx.createLinearGradient(0, 512, 512, 0);
    grad.addColorStop(0, "#a80000");
    grad.addColorStop(1, "#000078");

    ctx.fillStyle = grad;
    ctx.roundRect(0, 0, 512, 512, 18);
    ctx.fill();

    for (var i = 0; i < 5; i++){
        for (var j = 0; j < 5; j++){
            DrawImage(ctx, i, j, boardData[j * 5 + i]);
        }
    }
}

function DrawImage(ctx, i, j, weapon){
    var img = document.createElement("img");
    var x = padding + (i * imgSize) + (i * margin);
    var y = padding + (j * imgSize) + (j * margin);
    img.onload = function(){
        ctx.save();

        ctx.beginPath();
        ctx.moveTo(x + cornerRadius, y);
        ctx.lineTo(x + imgSize - cornerRadius, y);
        ctx.quadraticCurveTo(x + imgSize, y, x + imgSize, y + cornerRadius);
        ctx.lineTo(x + imgSize, y + imgSize - cornerRadius);
        ctx.quadraticCurveTo(x + imgSize, y + imgSize, x + imgSize - cornerRadius, y + imgSize);
        ctx.lineTo(x + cornerRadius, y + imgSize);
        ctx.quadraticCurveTo(x, y + imgSize, x, y + imgSize - cornerRadius);
        ctx.lineTo(x, y + cornerRadius);
        ctx.quadraticCurveTo(x, y, x + cornerRadius, y);
        ctx.closePath();

        ctx.clip();
        ctx.drawImage(img, x, y, imgSize, imgSize);
        ctx.restore();
    };
    img.src = "../resources/weapon-images/" + weapon + "_Unchecked.png";
}