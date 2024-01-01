import { GoBell, GoDatabase } from 'react-icons/go';
import Button from './../components/Button';

function ButtonPage() {
  const handleClick = () => {
  };

  return (
    <div>
      <div>
        <Button
          primary
          outline
          rounded
          className="mb-5"
          onClick={handleClick}
        >
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button success rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
