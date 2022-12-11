import CircleRenderer from "../../../Core/Essentials/Components/CircleRenderer";
import { main, p5 } from "../../../Core/main";

class BunnyRenderer extends CircleRenderer {
  constructor({ color = main.color(200) }) {
    super({ color });
  }

  update() {
    super.update();
    main.push();
    main.fill(255);
    main.push();
    main.translate(1.5, -4);
    main.rotate(main.QUARTER_PI / 1.2);
    main.ellipse(0, 0, 8, 2);
    main.rotate(-main.QUARTER_PI / 1.2);
    main.translate(0, 8);
    main.rotate(-main.QUARTER_PI / 1.2);
    main.ellipse(0, 0, 8, 2);
    main.pop();
    main.ellipse(-4, 0, 2, 2);
    main.pop();
  }
}

export default BunnyRenderer;
