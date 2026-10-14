import { Composition } from "remotion";
import { ALTURA, FPS, LARGURA } from "./formato";
import { Teste } from "./Teste";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Teste"
        component={Teste}
        durationInFrames={5 * FPS}
        fps={FPS}
        width={LARGURA}
        height={ALTURA}
      />
    </>
  );
};
