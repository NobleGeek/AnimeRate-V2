import React from 'react';
import '../styles/Menu.css';

/**
 * Reusable dropdown Menu component.
 *
 * @param {Object}   props
 * @param {Object[]} props.items            - Array of menu item objects.
 * @param {string}   props.items[].label    - Display text for the item.
 * @param {React.ReactNode} [props.items[].icon] - Optional SVG/React icon.
 * @param {string}   [props.items[].href]   - URL to navigate to (renders an <a>).
 * @param {function} [props.items[].onClick] - Click handler (renders a <button>).
 * @param {boolean}  [props.items[].danger] - If true, renders in the danger/red color.
 * @param {'top'|'bottom'} [props.items[].divider] - Renders a separator line above or below.
 * @param {string}   [props.className]      - Extra class to apply to the root wrapper.
 *
 * @example
 * const items = [
 *   {
 *     label: 'My Profile',
 *     icon: <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
 *     href: '/profile',
 *   },
 *   {
 *     label: 'Logout',
 *     icon: <svg>…</svg>,
 *     onClick: handleLogout,
 *     danger: true,
 *     divider: 'top',
 *   },
 * ];
 *
 * <Menu items={items} />
 */
function Menu({ items = [], className = '' }) {
  if (items.length === 0) return null;

  const renderItem = (item, index) => {
    const isDanger = item.danger;
    const linkClass = `menu-link${isDanger ? ' menu-link--danger' : ''}`;

    const inner = (
      <>
        {item.icon && <span className="menu-icon">{item.icon}</span>}
        <span className="menu-label">{item.label}</span>
      </>
    );

    return (
      <React.Fragment key={item.label ?? index}>
        {item.divider === 'top' && <li className="menu-divider" role="separator" />}

        <li className="menu-item">
          {item.href ? (
            <a href={item.href} className={linkClass}>
              {inner}
            </a>
          ) : (
            <button type="button" onClick={item.onClick} className={linkClass}>
              {inner}
            </button>
          )}
        </li>

        {item.divider === 'bottom' && <li className="menu-divider" role="separator" />}
      </React.Fragment>
    );
  };

  return (
    <div className={`user-menu ${className}`.trim()} role="menu">
      <ul>{items.map(renderItem)}</ul>
    </div>
  );
}

export default Menu;