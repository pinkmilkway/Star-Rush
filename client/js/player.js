class player extends Phaser.Scene {
  constructor() {
    super("player");
  }

  create() {
    this.add.image(400, 225, "start-background").postFX.addBlur(5);

    this.add
      .text(400, 50, "Escolha seu astronauta:", {
        fontFamily: "Rye-Regular",
        fontSize: "64px",
        fill: "#ffffff",
      })
      .setOrigin(0.5);

    this.anims.create({
      key: "android",
      frames: this.anims.generateFrameNumbers("android-andandoesquerda", {
        start: 0,
        end: 5,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "character",
      frames: this.anims.generateFrameNumbers("character-andandoesquerda", {
        start: 0,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    });

    const startSceneOnSelection = (player) => {
      console.log(
        "Player selected in room:",
        this.game.room,
        "player:",
        player,
      );
      this.game.localPlayer = player;
      this.game.remotePlayer = player === "android" ? "character" : "android";
      this.scene.stop("player");
      this.scene.start("scene0");
    };

    this.android = this.add
      .sprite(300, 225, "android-andandoesquerda", 0)
      .setScale(3)
      .setInteractive()
      .on("pointerdown", () => {
        console.log("Android player selected");
        this.game.localPlayer = "android";
        this.game.remotePlayer = "character";
        this.game.socket.once("player-selected", startSceneOnSelection);
        this.game.socket.emit(
          "select-player",
          this.game.room,
          this.game.localPlayer,
        );
      });
    this.android.play("android");

    this.character = this.add
      .sprite(550, 225, "character-andandoesquerda", 0)
      .setScale(3)
      .setInteractive()
      .on("pointerdown", () => {
        console.log("Character player selected");
        this.game.localPlayer = "character";
        this.game.remotePlayer = "android";
        this.game.socket.once("player-selected", startSceneOnSelection);
        this.game.socket.emit(
          "select-player",
          this.game.room,
          this.game.localPlayer,
        );
      });
    this.character.play("character");
  }
}

export default player;
