#!/usr/bin/env python3
# Used to push an update to the submodule.

import datetime
import os
import sys
import subprocess

def main():
    print("Deploying update to the main repo.")

    subprocess.run(["hugo"])
    os.chdir("public")
    subprocess.run(["git", "add", "-A"])

    msg = ""

    if len(sys.argv) == 2:
        msg = sys.argv[1]

    else:
        date = datetime.datetime.utcnow()
        msg = f"Rebuilding site {date.isoformat(timespec='seconds')}"


    subprocess.run(["git", "commit", "-m", msg])
    subprocess.run(["git", "push", "origin", "master"])


if __name__ == '__main__':
    main()
