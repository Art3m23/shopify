const collapsibleActionV = document.querySelector('.collapsible__action--visible');
const collapsibleActionH = document.querySelector('.collapsible__action--hidden');
const collapsibleContent = document.querySelector('.collapsible__content');
collapsibleContent.style.transformOrigin = '50% 0%';
collapsibleActionV.style.display = 'none';
const collapsAnim = collapsibleContent
  .animate(
    { transform: ['scaleY(0)', 'scaleY(1)'] },
    { duration: 300, fill: 'both', easing: "linear" }
  );
const collapsibleActionVisible = collapsibleActionV
  .animate(
    [{
      opacity: '0',
    }, {
      opacity: '1',
    }],
    { duration: 300, fill: 'both', easing: "linear" }
  );
const collapsibleActionHidden = collapsibleActionH
  .animate(
    [{
      opacity: '1',
    }, {
      opacity: '0',
    }],
    { duration: 300, fill: 'both', easing: "linear" }
  );
collapsAnim.pause();
collapsibleActionVisible.pause();
collapsibleActionHidden.pause();
let isVisible = true;
document.querySelector('.collapsible__button').addEventListener('click', () => {
  if (collapsAnim.playState === 'paused') {
    collapsAnim.play();
    collapsibleActionVisible.play();
    collapsibleActionHidden.play();
    collapsibleActionH.style.display = 'none';
    collapsibleActionV.style.display = '';
  } else {
    collapsAnim.reverse();
    collapsibleActionVisible.reverse();
    collapsibleActionHidden.reverse();
    if (isVisible) {
      collapsibleActionV.style.display = 'none';
      collapsibleActionH.style.display = '';
      isVisible = false;
    } else {
      collapsibleActionH.style.display = 'none';
      collapsibleActionV.style.display = '';
      isVisible = true;
    }
  }
});