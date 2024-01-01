import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I agree
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        This is an important document for you to read. Click on I agree to
        submit
      </p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        tempus turpis eu leo accumsan euismod. Nam blandit, quam et eleifend
        euismod, turpis leo consequat diam, id iaculis purus nibh molestie nisl.
        Morbi risus risus, efficitur a est eu, posuere tempus est. Phasellus
        malesuada odio eu arcu consectetur feugiat. Vestibulum placerat sit amet
        nisi tincidunt tincidunt. Pellentesque habitant morbi tristique senectus
        et netus et malesuada fames ac turpis egestas. Ut fringilla laoreet
        aliquam.Nullam suscipit velit et libero venenatis, non aliquet felis
        pulvinar. Nunc lobortis ante sit amet eros rutrum faucibus. Vestibulum
        mauris nulla, maximus sed tortor at, feugiat tempus lacus. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Phasellus aliquam vestibulum venenatis. Maecenas quis est
        vestibulum tellus vulputate imperdiet ut in est. Aliquam semper faucibus
        metus ut ornare. Donec ullamcorper tortor nunc. Curabitur fermentum
        euismod nulla, ac laoreet sapien tempus ut. Ut bibendum ante vel velit
        eleifend, sed dignissim ex viverra. Phasellus eleifend diam in elit
        sagittis pulvinar.Donec eu diam lorem. Nulla semper eu metus nec
        elementum. Aliquam fermentum feugiat leo eu suscipit. Aliquam ultrices
        justo metus, sit amet imperdiet ipsum consectetur sit amet. Donec
        eleifend ante efficitur viverra bibendum. Curabitur neque ante,
        consequat vitae dui at, aliquet laoreet nunc. Vivamus id viverra sem.
        Aliquam aliquam lorem et ante fringilla, vitae ornare purus aliquam.
        Maecenas nec tellus purus. Pellentesque nec massa sollicitudin,
        efficitur nunc vel, condimentum tellus. Aliquam et tempor elit.
        Phasellus vitae efficitur mauris, sed viverra lorem. Cras tincidunt ex
        ac volutpat gravida. Morbi dapibus neque sed massa sagittis
        aliquet.Aliquam ornare ligula ac ipsum tristique, et rutrum diam
        placerat. Duis eleifend dictum quam quis mollis. Morbi et blandit enim,
        nec sollicitudin tortor. Sed bibendum velit ut euismod eleifend. Cras
        varius sem sed ex sollicitudin, vulputate consequat mi euismod. Sed
        sagittis, massa sit amet consectetur mollis, ex mi malesuada nunc, nec
        ullamcorper libero libero non augue. Vestibulum hendrerit consequat
        volutpat. Sed aliquam arcu laoreet erat cursus, accumsan tempus nulla
        varius. Nullam elementum, lacus eu pellentesque vulputate, velit leo
        efficitur massa, in vulputate augue arcu ac massa. Aliquam erat
        volutpat. Pellentesque molestie purus ac fringilla dapibus. Integer
        tincidunt fringilla nisl, rhoncus suscipit ante aliquet at. Nulla
        tristique nec risus sed commodo. Morbi porttitor enim a rutrum
        hendrerit. Duis placerat, lorem vel sagittis mattis, augue purus
        vulputate tellus, at porttitor ante mi id sapien.Donec imperdiet
        lobortis felis. Quisque dui lorem, maximus molestie felis eget,
        ultricies rutrum ante. Quisque eu porta neque, id porttitor ante.
        Praesent in felis nec libero fermentum dignissim viverra ac lectus.
        Praesent vel accumsan neque. Nullam eleifend metus vel purus laoreet
        dapibus sit amet at nulla. Donec ac libero a mi rhoncus tincidunt
        dapibus eu augue. Sed imperdiet eget felis dapibus ornare. Duis mollis
        mi eget volutpat ultrices. Aliquam vulputate turpis dictum dapibus
        dapibus. Donec et massa quis erat ullamcorper imperdiet non nec ante.
        Suspendisse potenti. Donec nisl ipsum, interdum sed dolor eu, pretium
        consequat elit. Morbi auctor turpis sit amet leo egestas, ut bibendum
        metus accumsan.
      </p>
    </div>
  );
}

export default ModalPage;
