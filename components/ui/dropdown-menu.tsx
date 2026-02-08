'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

type MenuContextValue = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext = React.createContext<MenuContextValue | null>(null);

function useMenuContext() {
  const context = React.useContext(MenuContext);
  if (!context) {
    throw new Error('DropdownMenu components must be used within DropdownMenu');
  }
  return context;
}

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      <div className="ui-dropdown" ref={ref}>
        {children}
      </div>
    </MenuContext.Provider>
  );
}

export function DropdownMenuTrigger({
  children,
  asChild
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) {
  const { open, setOpen } = useMenuContext();

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{
      onClick?: (event: React.MouseEvent) => void;
      'aria-expanded'?: boolean;
      'aria-haspopup'?: string;
    }>;
    return React.cloneElement(child, {
      onClick: (event: React.MouseEvent) => {
        child.props.onClick?.(event);
        setOpen((prev) => !prev);
      },
      'aria-expanded': open,
      'aria-haspopup': 'menu'
    });
  }

  return (
    <button type="button" onClick={() => setOpen((prev) => !prev)} aria-expanded={open} aria-haspopup="menu">
      {children}
    </button>
  );
}

export function DropdownMenuContent({
  children,
  className,
  align = 'start',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  align?: 'start' | 'end';
} & React.HTMLAttributes<HTMLDivElement>) {
  const { open } = useMenuContext();
  if (!open) return null;

  return (
    <div
      className={cn('ui-dropdown-content', align === 'end' && 'ui-dropdown-content--end', className)}
      role="menu"
      {...props}
    >
      {children}
    </div>
  );
}

export function DropdownMenuItem({
  className,
  onSelect,
  children
}: {
  className?: string;
  onSelect?: () => void;
  children: React.ReactNode;
}) {
  const { setOpen } = useMenuContext();

  return (
    <button
      type="button"
      className={cn('ui-dropdown-item', className)}
      role="menuitem"
      onClick={() => {
        onSelect?.();
        setOpen(false);
      }}
    >
      {children}
    </button>
  );
}

export function DropdownMenuSeparator({ className }: { className?: string }) {
  return <div className={cn('ui-dropdown-separator', className)} />;
}

type RadioContextValue = {
  value: string;
  onValueChange: (value: string) => void;
};

const RadioContext = React.createContext<RadioContextValue | null>(null);

function useRadioContext() {
  const context = React.useContext(RadioContext);
  if (!context) {
    throw new Error('DropdownMenuRadioItem must be used within DropdownMenuRadioGroup');
  }
  return context;
}

export function DropdownMenuRadioGroup({
  value,
  onValueChange,
  children
}: {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return <RadioContext.Provider value={{ value, onValueChange }}>{children}</RadioContext.Provider>;
}

export function DropdownMenuRadioItem({
  value,
  className,
  children
}: {
  value: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { value: selectedValue, onValueChange } = useRadioContext();
  const { setOpen } = useMenuContext();
  const active = value === selectedValue;

  return (
    <button
      type="button"
      className={cn('ui-dropdown-item', active && 'ui-dropdown-item--active', className)}
      role="menuitemradio"
      aria-checked={active}
      onClick={() => {
        onValueChange(value);
        setOpen(false);
      }}
    >
      {children}
    </button>
  );
}
