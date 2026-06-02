class gameover extends Phaser.Scene {
  constructor() {
    super("gameover");
  }

  preload() {
    this.load.setPath("assets/");
    this.load.image("gameover", "gameover.png");
  }

  create() {
    const bg = this.add
      .image(this.cameras.main.centerX, this.cameras.main.centerY, "gameover")
      .setOrigin(0.5);

    const scale = Math.min(
      this.cameras.main.width / bg.width,
      this.cameras.main.height / bg.height,
    );

    bg.setScale(scale)
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("start");
        /*global Phaser*/
/*eslint no-undef: "error"*/
export default class finalTriste extends Phaser.Scene {
  constructor() {
    super("finalTriste");
  }
}
      });
  }
}

export default gameover;
