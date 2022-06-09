AIUtil.SetContext Browser("creationtime:=0")
Browser("creationtime:=0").Maximize

wait(3)

'Profile
AIUtil("profile", micAnyText, micWithAnchorOnLeft, AIUtil("search")).Click
AIUtil("input", "Username").Type "aidemo"
AIUtil("input", "Password").Type "AIdemo1"

'check point
AIUtil("button", "SIGN IN").CheckExists True
AIUtil("button", "SIGN IN").CheckExists False


AIUtil("button", "LOGIN").Click

'wait(2)
'AIUtil("search").Search "17t"
'AIUtil.FindTextBlock("HP ENVY - 17t Touch", micFromBottom, 1).Click
'AIUtil.FindTextBlock("ADD TO CART").Click
'AIUtil("shopping_cart").Click

Browser("creationtime:=0").CloseAllTabs


