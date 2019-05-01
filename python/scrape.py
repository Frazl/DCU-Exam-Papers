from collections import defaultdict
import json
import requests


LINK = 'https://docs.google.com/spreadsheets/u/3/d/1CFYESIf92lMHY4K-cQne0xvD-gb1CMsz8I0NiXGQN8g/export?format=csv&id=1CFYESIf92lMHY4K-cQne0xvD-gb1CMsz8I0NiXGQN8g&gid=0'

def download():
    global LINK
    r = requests.get(LINK)
    with open('exams.csv', 'wb') as f:
        f.write(r.content)
    return None

def scrape():
    exam_papers = defaultdict(dict)
    with open('exams.csv') as f:
        header = f.readline()
        for line in f:
            line = line.split(',')
            module = line[0]
            year = line[1]
            link = get_link(line[2])
            exam_papers[module][year] = link
    return exam_papers

def get_link(unformatted_link):
    try:
        return unformatted_link.split("'")[1]
    except:
        return None


def main():
    download()
    exam_papers = scrape()
    exam_papers_json = json.dumps(exam_papers)
    with open('examPapers.json', 'w') as f:
        f.write(exam_papers_json)


main()