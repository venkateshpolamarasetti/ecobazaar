# Component & Asset Registry Blueprint

**Recommended File Name**: `DESIGN_SYSTEM.md` or `COMPONENT_REGISTRY.md`
**Purpose**: To serve as a single source of truth for all assets, components, styles, and their interdependencies.

---

## 1. Design Tokens & Assets
### Colors
| Token Name | Hex Value | Usage |
|------------|-----------|-------|
| `primary`  | `#00B207` | Main buttons, links |
| `danger`   | `#FF0000` | Error states, delete actions |

### Typography
| Token Name | Font Family | Size | Weight | Usage |
|------------|-------------|------|--------|-------|
| `Display.L`| Poppins | 48px | 600 | Hero headers |

### Icons & Media
- **Icon Set**: [e.g., Phosphor Icons, Lucide]
- **Logo Assets**: `src/assets/branding/`
- **global.css**: `src/styles/index.css`

---

## 2. Components Registry

### [Category: Atoms]
*Smallest functional units.*

#### **Component: [Name]** (e.g., `Button`)
- **File**: `src/components/ui/Button.jsx`
- **Props**:
  - `variant`: 'primary' | 'secondary' | 'outline' (Default: 'primary')
  - `size`: 'sm' | 'md' | 'lg'
  - `disabled`: boolean
- **Events**:
  - `onClick`: (event) => void
- **Sub-components**: None.

---

### [Category: Molecules]
*Combinations of atoms.*

#### **Component: [Name]** (e.g., `SearchBar`)
- **File**: `src/components/features/SearchBar.jsx`
- **Composition**:
  - Uses `<Input />` (Atom)
  - Uses `<Button />` (Atom)
- **Props**:
  - `placeholder`: string
- **Events**:
  - `onSearch`: (query) => void

---

### [Category: Organisms]
*Complex sections of the UI.*

#### **Component: [Name]** (e.g., `ProductCard`)
- **File**: `src/components/product/ProductCard.jsx`
- **Props**:
  - `product`: ProductObject
- **Sub-components**:
  - `ProductCard.Image`
  - `ProductCard.Title`
  - `ProductCard.Price`
  - `ProductCard.Actions`
- **Events**:
  - `onAddToCart`: (productId) => void

---

## 3. Global Stores / Contexts
- **AuthContext**: `src/context/AuthContext.jsx`
  - **State**: `user`, `isAuthenticated`
  - **Methods**: `login()`, `logout()`

## 4. Third-Party Libraries
- `react-hook-form`: Form handling
- `swiper`: Carousels

