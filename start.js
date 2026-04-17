class start extends Phaser.Scene {
  constructor() {
    super("start");
  }

  preload() {
    this.load.setPath("assets/");
    this.load.image("start", "start-background.png");
  }

  create() {
    const bg = this.add.image(0, 0, "start").setOrigin(0);

    const scale = Math.min(
      this.cameras.main.width / bg.width,
      this.cameras.main.height / bg.height,
    );

    bg.setScale(scale)
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("scene0");
      });
  }
}

export default start;