import EmblaCarousel from "https://esm.sh/embla-carousel";

const OPTIONS = { dragFree: true,
                  Align:'center'
                };

var emblaNodes = [].slice.call(document.querySelectorAll(".embla"));

var emblaCarousels = emblaNodes.map(function (emblaNode) {
  let viewportNode = emblaNode.querySelector(".embla__viewport");
  return EmblaCarousel(viewportNode, OPTIONS);
});
