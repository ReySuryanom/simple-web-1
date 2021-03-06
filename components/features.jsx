import { keyFeatures } from '../utils/constant';
import KeyFeature from './key-feature';

function Features() {
  return (
    <section className="px-[105px] py-32" id="feature">
      <h2 className="mb-20 text-5xl font-bold text-center text-primary">
        Our Key Features
      </h2>
      <div className="grid grid-cols-2 gap-14">
        {keyFeatures.map((item) => (
          <KeyFeature key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Features;
