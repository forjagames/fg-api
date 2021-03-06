---
sidebar_position: 4
---

# Leaderboard

The `Leaderboard Service` allows your games to have score tables to recognize the best players.

## Add new leaderboards

To add a new leaderboard, you must click on the menu button and then click on "Add Leaderboard".

Once this is done, you will be prompted for a name for your leaderboard. You must choose a valid name. 

Confirm the popup, and then you will be prompted for generating the `Secret protection token`. We recommend that you generate it. In the future the generation of the secret will be required.

Finally, confirm the popup, and your new draft leaderboard will be ready to set up.

## Set up using Portal

### Leaderboard modes
- **Draft**. If your leaderboard is in draft mode, users won't be able to submit scores. The draft leaderboard will remain visible for everyone.
- **Published**. If your leaderboard is in draft mode, users will be able to see the leaderboard and submit scores.

### Settings
- **Name**: Visible name of the leaderboard.
- **Secret protection**: Secret token used for encrypt the Leaderboard submissions.
- **Sort asc.**: The ranking order. If you choose ascending order, then those with the lowest score will be at the top.
- **Allow guest scores**: If this value is disabled, only users authenticated with `identity` will be able to submit scores. Otherwise, anyone will be able to do so.
- **Unique score per player**: Each player has a single score. This prevents players from having a lot of scores on the same leaderboard, being able to fill it by himself. If this option is disabled, a player could completely fill the table with different scores.
- **Records limit**: Limit of stored (and visible) records in the ranking. _Range: between 10 and 999 records._
- **Min value**: Minimum allowed score.
- **Max value**: Maximum allowed score.

## Deleting scores
As an admin user, you have permissions to delete scores uploaded by the user. 
We recommend using this feature in case of detecting fraudulent scores or in case of changing the score calculation of your game.

## Deleting leaderboards
You can only delete `draft leaderboards`. If you want to delete a `published leaderboard`, you must unpublish it first.
