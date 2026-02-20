package main

import (
	"log"
	"net/http"
)

var prayers []Prayer
var categories []Category
var deities []Deity

func main() {
	seedData()

	http.HandleFunc("/api/prayers", getPrayers)
	http.HandleFunc("/api/prayers/", getPrayerByID)
	http.HandleFunc("/api/categories", getCategories)
	http.HandleFunc("/api/deities", getDeities)
	http.HandleFunc("/api/deities/", getDeityByID)

	log.Println("Server starting on :8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func seedData() {
	categories = []Category{
		{ID: "1", Name: "Daily", Tibetan: "ཉིན་རེའི་ཞལ་འདེབས།", Icon: "schedule", Color: "bg-primary", Count: 12},
		{ID: "2", Name: "Deities", Tibetan: "ཡི་དམ།", Icon: "spa", Color: "bg-tara-green", Count: 45},
		{ID: "3", Name: "Lineage", Tibetan: "བརྒྱུད་པ།", Icon: "account_tree", Color: "bg-guru-saffron", Count: 28},
	}

	prayers = []Prayer{
		{
			ID:          "seven-line",
			Title:       "Seven Line Prayer",
			Tibetan:     "གུ་རུ་རིན་པོ་ཆེའི་ཚིག་བདུན་གསོལ་འདེབས།",
			Description: "The most sacred invocation to Guru Rinpoche, condensing the essence of all prayers.",
			Category:    "Nyingma",
			Duration:    "5 min",
			Lineage:     "Nyingma",
			Icon:        "stat_3",
			Content: []Stanza{
				{Tibetan: "ཧཱུྃ༔ ཨོ་རྒྱན་ཡུལ་གྱི་ནུབ་བྱང་མཚམས༔", Phonetic: "HUNG ORGYEN YUL GYI NUB JANG TSAM", English: "Hūṃ! In the north-west of the land of Oḍḍiyāna,"},
				{Tibetan: "པདྨ་གེ་སར་སྡོང་པོ་ལ༔", Phonetic: "PEMA GESAR DONGPO LA", English: "In the heart of a lotus flower,"},
				{Tibetan: "ཡ་མཚན་མཆོག་གི་དངོས་གྲུབ་བརྙེས༔", Phonetic: "YATSEN CHOK GI NGÖDRUB NYÉ", English: "Endowed with the most marvelous attainments,"},
				{Tibetan: "པདྨ་འབྱུང་གནས་ཞེས་སུ་གྲགས༔", Phonetic: "PEMA JUNGNÉ ZHÉ SU DRAK", English: "You are renowned as the 'Lotus-born',"},
			},
		},
		{
			ID:          "tara-praises",
			Title:       "Praises to Tara",
			Tibetan:     "སྒྲོལ་མ་ཉེར་གཅིག་གི་བསྟོད་པ།",
			Description: "Homage to the twenty-one Taras, swift protectress and remover of obstacles.",
			Category:    "Universal",
			Duration:    "15 min",
			Lineage:     "Universal",
			Icon:        "spa",
		},
	}

	deities = []Deity{
		{
			ID:          "medicine-buddha",
			Name:        "Medicine Buddha",
			Tibetan:     "སངས་རྒྱས་སྨན་བླ།",
			Description: "Bhaisajyaguru, the Medicine Buddha, is the healer of inner and outer sickness.",
			Image:       "https://lh3.googleusercontent.com/aida-public/AB6AXuAu4l2Z6yTAiV9wqa-5sZLRdQj6ZoUveurfDVmpwBCriIFdEpv3ny-UrL98CfSOtqWW1WllCauIW95uM0ZgEi6igqxfxW4UGQ8y3c5ZrTGXJpzPwb9-fm8TNu1U7KMZunbVBa3kJVvlmHbEpERUFM8suoJkXBBihd5apw0Ob8IE58uVwwYi7HR4o_HUBQk3cU6hs3pzF5rXcDKYYrogkFh9fmhjnnEexEK_ZMyG6jCQXSf4-CIPnVZEXDdOrXTowEZ5TZjvgJecWxo",
			Lineage:     "Drukpa Kagyu Lineage",
			Prayers:     []Prayer{prayers[0]}, // Mock relation
		},
	}
}
