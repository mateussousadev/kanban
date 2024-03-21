/* -------------------------------------------------------------------------- */
/*                                    Kanban                                  */
/* -------------------------------------------------------------------------- */

const kanbanInit = () => {
    // kanbanContainer to controll collapse behavior in kanban board
    const kanbanContainer = document.querySelector('[data-kanban-container]');
    if (kanbanContainer) {
      kanbanContainer.addEventListener('click', e => {
        if (e.target.hasAttribute('data-kanban-collapse')) {
          e.target.closest('.kanban-column').classList.toggle('collapsed');
        }
      });
  
      const kanbanGroups = kanbanContainer.querySelectorAll('[data-sortable]');
      kanbanGroups.forEach(item => {
        const itemInstance = window.Sortable.get(item);
        itemInstance.option('onStart', e => {
          document.body.classList.add('sortable-dragging');
          window.Sortable.ghost
            .querySelector('.dropdown-menu')
            .classList.remove('show');
          const dropdownElement = e.item.querySelector(
            `[data-bs-toggle='dropdown']`
          );
          window.bootstrap.Dropdown.getInstance(dropdownElement)?.hide();
        });
  
        // return itemInstance;
      });
    }
  };
  
  export default kanbanInit;
  