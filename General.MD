404 "Not Found.
500 - not exact error server aware of
400 - server couldnt proceed.
200- 0k - get put patch delete .
201- created- only for post

session - gets cleared once user close the window( helps to retain input values in form or something where you want to retain data on refresh page)
cookie - 4kb (limited storage) available on server and client side too (used for sending auth tokens or something )
localstorage- persisted forever, 5-10mb storage ( use for long term like theme)

## 🔐 Difference Between `localStorage`, `sessionStorage`, and `cookies`

| Feature               | `localStorage`                              | `sessionStorage`                              | `cookie`                                            |
|-----------------------|---------------------------------------------|------------------------------------------------|-----------------------------------------------------|
| **Storage Capacity**  | ~5–10 MB                                     | ~5 MB                                           | ~4 KB                                               |
| **Expiration**        | Never expires unless manually cleared        | Expires on tab/browser close                   | Can be set manually via `expires` or `max-age`     |
| **Scope**             | Same-origin (available across tabs/windows) | Same-origin (tab-specific)                     | Sent with every HTTP request to the server         |
| **Accessible From**   | JavaScript only                              | JavaScript only                                | JavaScript **and** server                          |
| **Persistence**       | Persistent                                  | Temporary (per session)                        | Configurable                                       |
| **Use Case**          | Long-term client-side data                  | Temporary/tab-specific data                    | Authentication/session tracking                    |

---

## ✅ TypeScript Usage Examples

### `localStorage`

```ts
localStorage.setItem("token", "12345");
const token = localStorage.getItem("token"); // "12345"
localStorage.removeItem("token");
