from striprtf.striprtf import rtf_to_text
import os

appEnv = "DEV" if os.getenv("PYENV") != "PROD" else "PROD"
user = os.path.expanduser('~')
stickiesDBPath = os.path.join(os.getcwd(), "mockDB")

if os.getenv("PYENV") == "PROD":
    stickiesDBPath = os.path.join(
        user + "/Library/Containers/com.apple.Stickies/Data/Library/Stickies")


def printConfig():
    print(
        f"appEnv: {appEnv} | user: {user} | stickiesDBPath: {stickiesDBPath}\n")


def getSavedStickiesStatePath(stickiesDBPath):
    savedStickiesStatePath = os.path.join(
        stickiesDBPath, ".SavedStickiesState")

    if os.path.exists(savedStickiesStatePath) == False:
        raise Exception(".SavedStickiesState not found")

    print(f"savedStickiesStatePath: {savedStickiesStatePath}\n")
    return savedStickiesStatePath


def getStickies(stickiesDBPath):
    stickiesNames = [path.split(".")[0] for path in os.listdir(
        stickiesDBPath) if path.endswith(".rtfd")]
    stickiesContent = {}
    for stickyName in stickiesNames:
        stickyPath = os.path.join(stickiesDBPath, stickyName + ".rtfd")
        with open(os.path.join(stickyPath, "TXT.rtf")) as infile:
            content = infile.read()
            text = rtf_to_text(content)
            stickiesContent[stickyName] = text

    print(stickiesContent)
    return stickiesContent


def main():
    printConfig()
    savedStickiesStatePath = getSavedStickiesStatePath(stickiesDBPath)
    stickies = getStickies(stickiesDBPath)


if __name__ == "__main__":
    main()
