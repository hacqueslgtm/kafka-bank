# Git 命令和概念整理

## 基本操作

1. `git status`: 查看當前工作目錄狀態
2. `git add .`: 將所有更改添加到暫存區
3. `git commit -m "message"`: 提交更改，並添加提交信息
4. `git commit -a -m "message"`: 跳過暫存區，直接提交所有已追蹤文件的更改
5. `git commit --amend --no-edit`: 修改最後一次提交，不更改提交信息
6. `git restore`: 恢復工作目錄中的文件到之前的狀態

## 重置和日誌

7. `git reset --hard/--soft/--mixed`: 重置當前分支到指定狀態
   - `--hard`: 重置暫存區和工作目錄
   - `--soft`: 只移動 HEAD 指針
   - `--mixed`（默認）: 重置暫存區，但不影響工作目錄
8. `git log`: 顯示提交歷史
9. `git log --oneline`: 以簡潔的一行格式顯示提交歷史
10. `git reflog`: 顯示 HEAD 的移動歷史，預設保留30天

## 分支操作

11. `git branch`: 列出本地分支
12. `git checkout 'branchName'`: 切換到指定分支
13. `git branch -d 'branchName'`: 刪除分支
14. `git merge 'branchName'`: 合併指定分支到當前分支
15. `git merge 'branchName' --no-ff`: 強制創建一個新的合併提交
16. `git branch --remote`: 列出遠程分支

## 高級操作

17. `git rebase -i 'SHA1'`: 交互式變基，可以重寫歷史
    - `reword`: 修改提交信息
    - `squash`: 將提交融合到前一個提交
    - `fixup`: 類似 squash，但丟棄提交信息
18. `git reset ORIG_HEAD --hard`: 在執行危險操作（如 rebase）後，可以用此命令回到操作前的狀態

## 重要概念

- Fast-forward：更新分支指針而不創建新的合併提交
- 分支名稱最多可以有40個字符
- ORIG_HEAD：指向危險操作（如合併、重置）之前的狀態
- 提交一旦創建就會一直存在，即使刪除了相關的分支
- HEAD 像是一個貼紙，指向當前所在的提交
- Detached HEAD：HEAD 沒有指向任何分支，或切換到遠程分支時也會出現
- PR (Pull Request)：GitHub 上請求將更改合併到原始倉庫的機制

## 註記

- 養成小而頻繁提交的習慣，每次提交專注於一個邏輯變更
- 使用有意義的分支名稱和提交信息，以便更容易理解項目歷史
- 定期推送到遠程倉庫，避免本地大量未備份的更改
- 在進行重大更改前，考慮創建新分支
- 熟悉 Git 的工作流程可以大大提高團隊協作效率