# Example Usage: NewsletterSubscription Component

This document demonstrates how to use `blueprint.txt` and `testcases.txt` for a hypothetical `NewsletterSubscription` component.

---

## 1. Blueprint Example
*Content for `src/guide/blueprint.txt` when working on this component:*

### Component Name: NewsletterSubscription

#### 1. Overview
**Description**: A form that allows users to subscribe to the weekly newsletter by entering their email address.
**Purpose**: To capture user emails for marketing and engagement.
**Location**: `src/components/Marketing/NewsletterSubscription.jsx`

#### 2. Requirements
**Functional Requirements**:
- [ ] User can input an email address.
- [ ] Validate email format on submission.
- [ ] Display success message upon successful subscription.
- [ ] Display error message if API fails or email is invalid.
- [ ] Disable submit button while loading.

**Non-Functional Requirements**:
- Must be responsive (mobile-first).
- Matches brand color scheme.
- Accessible (ARIA labels for inputs).

#### 3. Use Cases
**Actors**: User

**Use Case 1: Successful Subscription**
- **Trigger**: User enters valid email and clicks "Subscribe".
- **Flow**:
  1. User types `test@example.com`.
  2. Clicks "Subscribe".
  3. System sends request to `/api/subscribe`.
  4. System returns 200 OK.
- **Outcome**: Button text changes to "Subscribed!", Form is cleared.

**Use Case 2: Invalid Email**
- **Trigger**: User clicks "Subscribe" with invalid email format.
- **Flow**:
  1. User types `invalid-email`.
  2. Clicks "Subscribe".
  3. Client-side validation fails.
- **Outcome**: Error message "Please enter a valid email" appears below input.

#### 4. Interface Design
**Props**:
| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| title | string | No | "Updates" | Optional title for the section |
| onSubscribe | func | No | - | Callback when subscription succeeds |

**State**:
- `email`: Current input value (String).
- `status`: 'idle' | 'loading' | 'success' | 'error'.
- `errorMessage`: String (if status is error).

#### 5. Dependencies
- `yup` (for validation).
- `axios` (for API calls).

---

## 2. Test Cases Example
*Content for `src/guide/testcases.txt` associated with this component:*

### Component: NewsletterSubscription

#### 1. Unit Tests
**Tooling**: Jest + React Testing Library

| ID | Description | Pre-conditions | Steps | Expected Result | Pass/Fail |
|----|-------------|----------------|-------|-----------------|-----------|
| UT-01 | Renders correctly | None | Render component | Input and Button are visible | |
| UT-02 | Handles input | None | Type "test@a.com" | Input value updates | |
| UT-03 | Shows error on invalid email | None | Type "bad", Click Submit | "Invalid email" error shown | |
| UT-04 | Disables button while loading | None | Click Submit (mock loading) | Button has `disabled` attribute | |

#### 2. Integration Tests
**Context**: Newsletter API mocking

| ID | Description | Steps | Expected Result |
|----|-------------|-------|-----------------|
| IT-01 | API Success Flow | Mock 200 response, fill valid email, submit | Success message shown, `onSubscribe` prop called |
| IT-02 | API Error Flow | Mock 500 response, fill valid email, submit | "Server error" message shown |

#### 3. Edge Cases
- [ ] User submits empty form (Should assume required).
- [ ] Rapid double-clicking on submit button (Should prevent double submission via loading state).

#### 4. Accessibility Tests
- [ ] Run `axe` check.
- [ ] Verify `Enter` key submits the form.
